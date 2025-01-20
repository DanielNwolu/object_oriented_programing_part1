# Simple Wallet Management System

## Description
This system is designed to manage users and their wallets effectively. It allows users to:
- Link multiple wallets (within a predefined limit).
- Manage wallet balances by crediting and debiting funds.
- Ensure balance constraints are upheld.

The system tracks user-wallet associations and ensures data integrity with proper validation and error handling.

---

## Class Diagram of the Wallet System

### Class: User
#### Attributes:
- `Id` (String): Unique identifier for the user.
- `firstName` (String): First name of the user.
- `lastName` (String): Last name of the user.
- `email` (String): Email address of the user.
- `wallets` (Set<String>): Set of wallet IDs linked to the user.

#### Methods:
- `linkWallet(walletId: String)`: Links a wallet to the user, ensuring the user does not exceed the maximum wallet limit.
- `retrieveUser()`: Retrieves and displays user details.

---

### Class: Wallet
#### Attributes:
- `Id` (String): Unique identifier for the wallet.
- `users` (Set<String>): Set of user IDs linked to the wallet.
- `balance` (Number): Current balance of the wallet.

#### Methods:
- `linkUserToWallet(user: User)`: Links a user to the wallet while validating constraints.
- `credit(amount: Number)`: Adds the specified amount to the wallet balance, ensuring it does not exceed the maximum balance.
- `debit(amount: Number)`: Deducts the specified amount from the wallet balance, ensuring it does not go negative.
- `retrieveWallet()`: Retrieves and displays wallet details.

---

## System Features
- **User Management**: Create users and track their wallet associations.
- **Wallet Management**: Manage wallet balances and enforce constraints on transactions.
- **Validation**: Ensure users and wallets adhere to predefined constraints for maximum wallets and balance.

---

## UML Class Diagramm Link

<iframe width="768" height="432" src="https://miro.com/app/embed/uXjVLsf9vbk=/?pres=1&frameId=3458764613701977591&embedId=424669791825" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

---

## UML Class Diagramm 
![simple wallet system](/images/wallet_system.jpg)

---
## How to Use
1. Create a `User` object by providing unique `Id`, `firstName`, `lastName`, and `email`.
2. Create a `Wallet` object by providing unique `Id` and an initial balance.
3. Use `linkUserToWallet()` to associate a wallet with a user.
4. Manage wallet balances using `fundWallet()` and `makePayment()` methods.
5. Use `retrieveUser()` and `retrieveWallet()` to view user and wallet details respectively.

