# EzTrove — Ubuntu VPS deployment (test branch)

This branch is for the staging/test deployment on an Ubuntu VPS. The Docker container
listens on **127.0.0.1:12090** (loopback only), and host nginx reverse-proxies public
traffic to it. SSL is wired in but commented out until a domain is pointed at the box.

## First-time VPS setup

Run as root (or with `sudo`) on a fresh Ubuntu 22.04 / 24.04 server.

```bash
# 1. System packages
apt update
apt install -y ca-certificates curl git nginx ufw

# 2. Docker (official convenience script)
curl -fsSL https://get.docker.com | sh

# 3. Firewall: open only what's needed
ufw allow OpenSSH
ufw allow 'Nginx Full'      # opens 80 and 443
ufw --force enable

# 4. Clone the repo + check out the test branch
mkdir -p /opt && cd /opt
git clone <YOUR_GIT_REMOTE_URL> eztrove
cd eztrove
git checkout test

# 5. Install the host nginx site config
cp deploy/nginx/eztrove.conf /etc/nginx/sites-available/eztrove
ln -sf /etc/nginx/sites-available/eztrove /etc/nginx/sites-enabled/eztrove
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# 6. First build + run
./deploy/deploy.sh
```

After this completes the site is reachable at **`http://<VPS_IP>/`** (port 80 via host nginx).
The container itself is NOT publicly reachable on 12090 — only the host can connect to it.

## Ongoing deploys

Every time you push new commits to `origin/test`, just run on the VPS:

```bash
cd /opt/eztrove
./deploy/deploy.sh
```

That script does: `git pull origin test` → `docker compose up -d --build` → reload nginx → smoke-test.

## Adding a domain + HTTPS later

When you have a domain (e.g. `staging.eztrove.io`) and its A record points to this VPS:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d staging.eztrove.io
```

Certbot will:
1. Talk to Let's Encrypt and obtain the cert
2. Edit `/etc/nginx/sites-available/eztrove` to add the 443 server block
3. Add the http → https redirect on port 80
4. Reload nginx

Renewals are automatic via certbot's systemd timer.

## What's different from the `development` branch

| Concern | `development` (localhost) | `test` (VPS) |
|---|---|---|
| Docker port binding | `12090:80` (any host iface) | `127.0.0.1:12090:80` (loopback only) |
| Public entry point | `http://localhost:12090` | `http://<VPS_IP>/` via host nginx |
| TLS | none | host nginx, SSL templated (commented) until a domain is added |
| Deploy mechanism | `docker compose up -d --build` | `./deploy/deploy.sh` (git pull + rebuild + nginx reload) |

## Troubleshooting

- **`./deploy/deploy.sh` says "expected branch 'test'"** — `git checkout test` first.
- **502 Bad Gateway from nginx** — container probably isn't running. Check `docker compose ps` and `docker compose logs --tail 50 web`.
- **`curl http://127.0.0.1:12090/healthz` fails on the VPS** — the container isn't healthy. Same as above.
- **Port 80 already in use** — Apache or another nginx may be installed. `sudo systemctl status apache2` / `sudo lsof -i :80`.
