<p align="center">
  <img src="logo.png" width="120" alt="Equis Logo">
</p>

<h1 align="center">Equis for Visual Studio Code</h1>

<p align="center">
  <strong>Rich language support for the <a href="https://github.com/equis-lang/equis">Equis</a> programming language.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v0.1.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/License-Apache%202.0-orange.svg" alt="License">
  <img src="https://img.shields.io/badge/VS%20Code-%5E1.50.0-007ACC.svg" alt="VS Code">
</p>

<p align="center">
  <a href="https://github.com/equis-lang/vscode-equis/actions/workflows/ci.yml">
    <img src="https://github.com/equis-lang/vscode-equis/actions/workflows/ci.yml/badge.svg" alt="VS Code Extension CI">
  </a>
</p>

---

The official Visual Studio Code extension for the **Equis** programming language — a systems language for building verifiable accounting systems with compile-time REA (Resource-Event-Agent) enforcement.

## ✨ Features

### Syntax Highlighting
Full TextMate grammar with semantic scopes for:
- **REA Constructs** — `Agent`, `Resource`, `Event`, `Commitment`, `Policy`, `Valuator`, `exchange`, `transformation`
- **Flow Keywords** — `flow`, `logic`, `in`, `out`, `from`, `to`, `execute`, `reverse`, `fulfills`, `evaluated_by`, `roles`
- **Control Flow** — `if`, `else`, `while`, `for`, `return`, `break`, `continue`
- **Storage & Declarations** — `fn`, `let`, `mut`, `struct`, `extern`, `interface`, `implements`
- **Type Annotations** — `i64`, `f64`, `bool`, `ptr`, `string`
- **Literals** — integers, floats, strings with escape sequences
- **Operators** — arithmetic, comparison, logical, assignment

### Language Server Protocol (LSP)
Built-in LSP client that automatically connects to `eq lsp` for:
- Go-to-definition
- Hover documentation
- Diagnostics

### File Icons
Custom `.equis` file icons via the bundled icon theme.

## 📦 Installation

### From VSIX (Local)
```bash
code --install-extension vscode-equis-0.1.0.vsix
```

### From Source
```bash
git clone https://github.com/equis-lang/vscode-equis.git
cd vscode-equis
npm install && npm run compile
```
Then press `F5` in VS Code to launch the Extension Development Host.

## ⚙️ Configuration

| Setting | Type | Default | Description |
|---|---|---|---|
| `equis.executablePath` | `string` | `""` | Absolute path to the `eq` executable. Leave empty to auto-detect from `~/.equis/bin/` or `PATH`. |

## 🔗 Related

- [Equis Language](https://github.com/equis-lang/equis) — Compiler, runtime, and standard library
- [Language Specification](https://github.com/equis-lang/equis/blob/main/docs/specification.md)
- [Standard Library Reference](https://github.com/equis-lang/equis/blob/main/docs/stdlib_reference.md)

## License
Copyright (c) 2026 [mlintangmz](https://github.com/equis-lang)  
Licensed under the [Apache License 2.0](LICENSE).
