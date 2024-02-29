# Bancojidotas

Bancojidotas is a banking application that provides various functionalities for managing user accounts, bank accounts, and debit/credit cards. The application can be developed for desktop, web, or mobile platforms.

## Features

- **User Registration**: Users can register with the application by providing necessary details.
  
- **Bank Account Management**:
  - Registration of bank accounts
  - Modification of bank account details
  - Deletion of bank accounts

- **Debit/Credit Card Management**:
  - Registration of debit and credit cards
  - Modification of card details
  - Deletion of cards

- **Transfer between Own Accounts**: Users can transfer funds between their own accounts.

- **User Profile Management**: Users can update their personal information.

## Architecture Evolution

The application will evolve from a monolithic architecture to an 8-layered architecture. Each architecture will be implemented as an executable and independently verifiable product.

### Monolithic Architecture
- Initial development will follow a monolithic architecture where all functionalities are tightly coupled within a single application.

### 3-Layered Architecture
- The monolithic architecture will be refactored into a 3-layered architecture consisting of presentation, business logic, and data access layers.

### 5-Layered Architecture
- Further separation of concerns will be achieved by transitioning to a 5-layered architecture with the addition of service and domain layers.

### 8-Layered Architecture
- The final architecture will consist of 8 layers, including presentation, application, domain, infrastructure, persistence, service, interface adapters, and external components.

## Task Assignments

Each architecture evolution stage will have its task assignment on the designated platform for uploading corresponding evidence.

- **Monolithic Architecture**: Task assigned on [Platform A](example.com/task1)
- **3-Layered Architecture**: Task assigned on [Platform B](example.com/task2)
- **5-Layered Architecture**: Task assigned on [Platform C](example.com/task3)
- **8-Layered Architecture**: Task assigned on [Platform D](example.com/task4)

## Getting Started

To get started with Bancojidotas, follow the steps below:

1. Clone the repository.
2. Navigate to the project directory.
3. Follow the setup instructions specific to your chosen platform and architecture.

## Technologies Used

- Frontend: (To be decided based on the chosen platform)
- Backend: (To be decided based on the chosen platform)
- Database: (To be decided based on the chosen platform)

## Contributors

- [John Doe](https://github.com/johndoe)
- [Jane Smith](https://github.com/janesmith)

## License

This project is licensed under the [MIT License](LICENSE).