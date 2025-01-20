// A Simple Wallet System

class User {
    static maxWallets = 2; // Max wallets a user can own

    constructor(Id, firstName, lastName, email) {
        this.Id = Id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.wallets = new Set(); // Keeps track of wallet IDs linked to this user
    }

    linkWallet(walletId) {
        if (this.wallets.size >= User.maxWallets) {
            throw new Error(`User ${this.firstName} cannot have more than ${User.maxWallets} wallets.`);
        }
        this.wallets.add(walletId);
    }

    retrieveUser() {
        console.log(`User retrieved: ID=${this.Id}, Name=${this.firstName} ${this.lastName}, Email=${this.email}`);
    }
}

class Wallet {
    static maxBalance = 10000000; // Max wallet balance limit

    constructor(Id, initialBalance = 0) {
        this.Id = Id;
        this.users = new Set(); // Links to user IDs
        this.balance = initialBalance;
    }

    linkUserToWallet(user) {
        if (!(user instanceof User)) {
            throw new Error("Invalid user object.");
        }
        user.linkWallet(this.Id); // Ensures user respects maxWallet constraint
        this.users.add(user.Id);
    }

    fundWallet(amount) {
        if (amount <= 0) {
            throw new Error("Credit amount must be positive.");
        }
        if (this.balance + amount > Wallet.maxBalance) {
            throw new Error(`Exceeds max wallet balance of ${Wallet.maxBalance}.`);
        }
        this.balance += amount;
        console.log(`Credited ${amount} to Wallet ${this.Id}. New Balance: ${this.balance}`);
    }

    makePayment(amount,item) {
        if (amount <= 0) {
            throw new Error("Debit amount must be positive.");
        }
        if (this.balance - amount < 0) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
        console.log(`Debited ${amount} from Wallet ${this.Id} for the payment of ${item}. New Balance: ${this.balance}`);
    }

    transfer(amount, targetWallet) {
        if (!(targetWallet instanceof Wallet)) {
            throw new Error("Invalid target wallet.");        }
        this.makePayment(amount); // Deduct amount from current wallet
        targetWallet.fundWallet(amount); // Add amount to the target wallet
        console.log(`Transferred ${amount} from Wallet ${this.Id} to Wallet ${targetWallet.Id}`);
    }

    retrieveWallet() {
        console.log(`Wallet Details: ID=${this.Id}, Users=${[...this.users]}, Balance=${this.balance}`);
    }
}

// Example Usage

// Create a user
const Daniel = new User("U001", "Daniel", "Nwolu", "nwoludaniel@gmail.com");
Daniel.retrieveUser();

// Create a wallet and link it to the user
const DansWallet = new Wallet("W001");
DansWallet.linkUserToWallet(Daniel);
DansWallet.retrieveWallet();

// Fund wallet
DansWallet.fundWallet(2000);

// Make payment
DansWallet.makePayment(500,"books");

// Retrieve wallet details
DansWallet.retrieveWallet();

// Create another wallet and transfer funds
const OtherWallet = new Wallet("W002");
OtherWallet.linkUserToWallet(Daniel);
DansWallet.transfer(1000, OtherWallet);

// Check balances after transfer
DansWallet.retrieveWallet();
OtherWallet.retrieveWallet();
