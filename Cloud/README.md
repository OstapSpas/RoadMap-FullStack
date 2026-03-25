# Spendly – kontajnerizovaná webová aplikácia na správu osobných financií

## Stručný opis projektu

Spendly je viacdielna webová aplikácia určená na správu osobných financií. Používateľ sa môže zaregistrovať, prihlásiť a následne pracovať so svojimi transakciami. Aplikácia podporuje základné CRUD operácie nad entitou transakcia a využíva autentifikáciu pomocou JWT tokenu. Celá aplikácia je nasadená lokálne pomocou Docker Compose.

---

## Architektúra aplikácie

```text
Prehliadač
   ↓
[FrontEnd – React + Nginx]
   ↓   (fe-be-network)
[BackEnd – Node.js + Express]
   ↓   (be-db-network)
[Databáza – PostgreSQL]

- **FrontEnd** — React (Vite), distribuovaný cez Nginx. Komunikuje s backendom výhradne cez HTTP API.
- **BackEnd** — Node.js + Express. REST API, autentifikácia cez JWT, bcrypt na hashovanie hesiel.
- **Databáza** — PostgreSQL. Uchováva používateľov a transakcie. Nie je priamo dostupná z frontendu.

## Použité technológie

| Vrstva   | Technológia                   |
|----------|-------------------------------|
| Frontend | React 18, Vite, Nginx 1.27    |
| Backend  | Node.js 20, Express, bcrypt   |
| Databáza | PostgreSQL 16                 |
| Auth     | JWT                           |
| Docker   | Docker Compose                |

## Siete a Volume

| Názov                   | Typ    | Účel                                      |
|-------------------------|--------|-------------------------------------------|
| `fe-be-network`         | bridge | Komunikácia FrontEnd ↔ BackEnd            |
| `be-db-network`         | bridge | Komunikácia BackEnd ↔ Databáza            |
| `spendly_postgres_data` | volume | Perzistentné uloženie dát PostgreSQL      |

Databáza nie je dostupná z frontend siete — úplná izolácia.

## Spustenie aplikácie

### 1. Naklonovať repozitár
```bash
git clone <url>
cd Cloud
```

### 2. Spustiť aplikáciu
```bash
./start-app.sh
```

alebo
```bash
docker compose up --build -d
```

### 3. Zastaviť aplikáciu
```bash
./end-app.sh
```

## URL adresa

Po spustení otvoriť v prehliadači: **http://localhost:5173**

## API endpointy

| Metóda | Cesta                     | Auth | Popis                        |
|--------|---------------------------|------|------------------------------|
| POST   | /api/auth/register        | —    | Registrácia nového používateľa |
| POST   | /api/auth/login           | —    | Prihlásenie, vracia JWT token |
| GET    | /api/transactions         | JWT  | Zoznam transakcií            |
| POST   | /api/transactions         | JWT  | Vytvorenie transakcie        |
| PUT    | /api/transactions/:id     | JWT  | Aktualizácia transakcie      |
| DELETE | /api/transactions/:id     | JWT  | Vymazanie transakcie         |