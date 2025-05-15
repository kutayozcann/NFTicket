# 🎟️ NFTicket

**NFTicket** is a decentralized NFT-based ticketing interface designed for event access and distribution, built on the Andromeda Protocol. It leverages Andromeda’s marketplace capabilities for listing, viewing, and transferring tickets, without incorporating auction or bidding mechanisms.

This version focuses on enabling creators to list event NFT tickets and for users to connect wallets and view ticket metadata — without mint-limiter or redeem logic, due to current ADO limitations.

## 🌐 Live Deployment

🔗 [Try NFTicket Live](https://embeddables.andromedaprotocol.io/andromeda-1/nfticket)

This embeddable UI reflects the currently deployed marketplace component on the **Andromeda-1 mainnet**.

---

## 🚀 Features

- **NFT Marketplace Integration**: View, list, and transfer NFT-based event tickets.
- **Keplr Wallet Support**: Connect and interact with NFTs using Keplr wallet.
- **Metadata Display**: View on-chain NFT metadata for event access.
- **Built with Andromeda**: Utilizes `cw721` NFT contract with marketplace support.

> ❗ Mint-limiter and redeem functionality are not currently available in this interface due to Andromeda’s ADO limitations at this time.

---

## 🛠️ Built With

- **Frontend**: Next.js, React, Chakra UI
- **Wallet Integration**: Keplr (Cosmos-based)
- **Chain**: andromeda-1 (mainnet)
- **Core ADO**: cw721 with marketplace interaction

---

## 📦 Installation

```bash
git clone https://github.com/kutayozcann/NFTicket.git
cd NFTicket
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 How It Works

1. **Connect Wallet**: User connects their Keplr wallet.
2. **View NFT Listings**: NFTs are fetched from the marketplace component.
3. **Metadata Interaction**: Users can view NFT details and perform transfers.
4. **Redeem and Mint Limits**: ❌ Not yet implemented due to ADO constraints.

---

## 📂 Project Structure

```
/app            → App routing and layout
/components     → UI elements
/modules        → CTA logic, wallet connection
/lib            → Hooks and configs
```

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes
4. Push the branch and open a PR

---

## 📄 License

This project is licensed under the MIT License.

—
**NFTicket** is powered by [Andromeda Protocol](https://andromedaprotocol.io)
