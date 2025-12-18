# AuditLabs

<div align="center">

![AuditLabs Logo](https://img.shields.io/badge/AuditLabs-GST%20Platform-blue?style=for-the-badge)

**Smart GST invoicing, taxation, and auditing platform designed for accuracy and simplicity**

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat)](https://expressjs.com/)

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## 📋 Overview

AuditLabs is a comprehensive GST invoicing and taxation platform built to streamline financial operations for businesses. With an intuitive interface and powerful automation features, AuditLabs simplifies complex tax calculations, invoice generation, and audit trail management.

## ✨ Features

- **📄 Smart Invoice Generation**: Create GST-compliant invoices with automated tax calculations
- **💰 Tax Management**: Comprehensive GST, CGST, SGST, and IGST handling
- **🔍 Audit Trail**: Complete transaction history and audit logging
- **📊 Dashboard Analytics**: Real-time insights into your financial data
- **🔐 Secure Authentication**: Powered by Clerk for enterprise-grade security
- **📱 Responsive Design**: Seamless experience across all devices
- **🧾 Report Generation**: Automated tax reports and financial statements
- **👥 Multi-user Support**: Role-based access control for teams

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI library for building interactive interfaces
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Clerk** - Complete user authentication and management

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Postman** - API development and testing

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (v5.0 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya1286/AuditLabs.git
   cd AuditLabs
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Configuration**

   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   NODE_ENV=development
   ```

   Create a `.env` file in the client directory:
   ```env
   REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Start MongoDB**
   ```bash
   mongod
   ```

6. **Run the application**

   Start the backend server:
   ```bash
   cd server
   npm run dev
   ```

   Start the frontend (in a new terminal):
   ```bash
   cd client
   npm start
   ```

7. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
AuditLabs/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   └── App.js         # Main app component
│   └── package.json
│
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Utility functions
│   └── server.js         # Entry point
│
└── README.md
```

## 🔑 API Documentation

### Authentication
All protected routes require a valid Clerk authentication token in the header:
```
Authorization: Bearer <token>
```

### Main Endpoints

- `POST /api/invoices` - Create new invoice
- `GET /api/invoices` - Get all invoices
- `GET /api/invoices/:id` - Get invoice by ID
- `PUT /api/invoices/:id` - Update invoice
- `DELETE /api/invoices/:id` - Delete invoice
- `GET /api/reports/tax-summary` - Get tax summary report
- `GET /api/audit-logs` - Retrieve audit logs

For detailed API documentation, import the Postman collection from `/docs/postman-collection.json`

## 🧪 Testing

Run tests with:
```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aditya Aishwarya**
- Email: aishwaryaaditya2@gmail.com
- GitHub: [@Aditya1286](https://github.com/Aditya1286)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape AuditLabs
- Built with modern technologies and best practices
- Inspired by the need for simplified GST compliance

## 📞 Support

For support, email aishwaryaaditya2@gmail.com or open an issue in the GitHub repository.

---

<div align="center">

Made with ❤️ by Aditya Aishwarya

⭐ Star this repo if you find it helpful!

</div>
