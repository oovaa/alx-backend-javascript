# ALX Backend JavaScript Projects

[![ALX](https://img.shields.io/badge/ALX-Backend%20JavaScript-blue?style=for-the-badge&logo=javascript&logoColor=white)](https://www.alxafrica.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)]()
[![TypeScript](https://img.shields.io/badge/typescript-5+-blue.svg)]()

> **Backend JavaScript Specialization** — ALX curriculum covering ES6+, TypeScript, testing, and backend patterns with Node.js/Express.

---

## 🎯 Overview

Backend JavaScript curriculum from the **ALX Software Engineering Program**. Covers modern JavaScript/TypeScript backend development: ES6 classes, TypeScript compilation, unit testing with Jest, and backend patterns.

---

## 📁 Projects (6 Modules)

| Module | Directory | Topics | Key Files |
|--------|-----------|--------|-----------|
| **ES6 Classes** | `0x02-ES6_classes/` | ES6 class syntax, inheritance, static methods, hoisting | `0-classroom.js`, `5-building.js`, `10-car.js`, `100-evcar.js` |
| **ES6 Data Manipulation** | `0x03-ES6_data_manipulation/` | Map, Set, WeakMap, WeakSet, iterators | `0-get_list_of_students.js`, `1-get_list_of_student_ids.js` |
| **TypeScript** | `0x04-TypeScript/` | TS config, interfaces, generics, webpack | `task_0/tsconfig.json`, `task_0/webpack.config.js`, `task_0/js/main.ts` |
| **Async Programming** | `0x05-async/` | Promises, async/await, error handling | `0-async.js`, `1-async.js`, `2-async.js` |
| **Unit Tests in JS** | `0x06-unittests_in_js/` | Jest, mocking, async testing, coverage | `5-payment.test.js`, `5-payment.js`, `package.json` |
| **Basic React** | `0x07-react/` | Components, props, state, hooks | `src/App.js`, `src/components/` |

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Language** | JavaScript (ES6+), TypeScript 4+ |
| **Runtime** | Node.js 14+ |
| **Transpilation** | Babel 7 (`@babel/core`, `@babel/node`, `@babel/preset-env`) |
| **Bundling** | Webpack 5 (`webpack.config.js`) |
| **Testing** | Jest 24+ (`jest`, `jest-extended`) |
| **Linting** | ESLint 6 (`eslint-config-airbnb-base`) |
| **Module System** | ES Modules / CommonJS |

---

## 🚀 Quick Start

```bash
git clone https://github.com/oovaa/alx-backend-javascript.git
cd alx-backend-javascript

# Each module has its own package.json
cd 0x02-ES6_classes
npm install
npm test
npm run lint

# TypeScript module
cd ../0x04-TypeScript/task_0
npm install
npx tsc --noEmit
npm run dev
```

---

## 📋 Module Details

### 0x02-ES6_classes
- **Class syntax**: `constructor`, `static` methods, getters/setters
- **Inheritance**: `extends`, `super()`, method overriding
- **Hoisting**: Function vs class hoisting differences
- **Static methods**: Utility functions on class itself

### 0x04-TypeScript
- **Configuration**: `tsconfig.json` with strict mode, ES5 target
- **Interfaces**: Type contracts for objects/functions
- **Generics**: Reusable type-safe components
- **Webpack**: Bundling with `ts-loader`

### 0x06-unittests_in_js
- **Jest**: Test runner, assertions, matchers
- **Mocking**: `jest.fn()`, `jest.mock()`, spyOn
- **Async testing**: `async/await`, `done` callback
- **Coverage**: `npm run full-test` (lint + test)

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Language** | JavaScript (ES6+), TypeScript 4+ |
| **Runtime** | Node.js 14+ |
| **Transpilation** | Babel 7 (`@babel/core`, `@babel/node`, `@babel/preset-env`) |
| **Bundling** | Webpack 5 (`webpack.config.js`) |
| **Testing** | Jest 24+ (`jest`, `jest-extended`) |
| **Linting** | ESLint 6 (`eslint-config-airbnb-base`, `eslint-plugin-import`, `eslint-plugin-jest`) |
| **Module System** | ES Modules / CommonJS |

---

## 🚀 Quick Start

```bash
git clone https://github.com/oovaa/alx-backend-javascript.git
cd alx-backend-javascript

# ES6 Classes module
cd 0x02-ES6_classes
npm install
npm run test
npm run lint

# TypeScript module
cd ../0x04-TypeScript/task_0
npm install
npx tsc --noEmit
npm run dev

# Unit Tests module
cd ../../0x06-unittests_in_js
npm install
npm test
npm run full-test
```

---

## 📚 Learning Outcomes

- ✅ ES6 class syntax: inheritance, static methods, hoisting
- ✅ TypeScript: interfaces, generics, strict typing, webpack integration
- ✅ Unit testing: Jest assertions, mocking, async testing, coverage
- ✅ Code quality: ESLint (Airbnb), Babel transpilation, webpack bundling
- ✅ Modern JS: modules, async/await, destructuring, spread/rest

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 👤 Author

**Omar Abdulrahim**  
GitHub: [@oovaa](https://github.com/oovaa)  
ALX Software Engineering Program