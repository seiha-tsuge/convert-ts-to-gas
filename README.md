# Convert TypeScript to Google Apps Script

## 概要

Convert TypeScript to Google Apps Script は、Google Apps Script の開発を TypeScript で環境構築できるテンプレートです。

## 1. 環境構築

以下のアプリケーションをインストールします。

| アプリケーション名                                   | バージョン   | インストール条件                                                        |
| ---------------------------------------------------- | ------------ | ----------------------------------------------------------------------- |
| [Node.js](https://nodejs.org/ja/)                    | 16.14.0 以上 | 必須                                                                    |
| [Visual Studio Code](https://code.visualstudio.com/) |              | [Visual Studio Code で開発する場合](#1-1-visual-studio-code-の拡張機能) |

### 1-1. Visual Studio Code の拡張機能

Visual Studio Code に、以下の拡張機能をインストールします。

| 拡張機能                                                                                                | インストール条件 |
| ------------------------------------------------------------------------------------------------------- | ---------------- |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                    | 必須             |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | 必須             |

## 2. 環境構築

### 2-1. `Clasp` をインストール

```bash
$npm install -g @google/clasp
```

### 2-1-1. Google アカウントと連携

```bash
$clasp login
```

### 2-2. `npm` を使う場合

コマンドの実行は、ルートディレクトリで行います。

### 2-2-1. 依存関係を構築する

```bash
$npm ci
```

### 2-3. スクリプト ID の設定

Apps Script プロジェクトを一意に識別するスクリプト ID を設定する。

### 2-3-1. .clasp.json

.clasp.json の<YOUR_SCRIPT_ID>を任意のスクリプト ID に置き換える。

```Json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "./dist"
}

```

## 3 関数の登録

[google.script.run](https://developers.google.com/apps-script/guides/html/reference/run)から呼び出されるエントリーポイントは、トップレベルに定義された関数である必要があります。そのため、エントリーポイントである`src/main.ts`に関数を設定します。

### 3-1. `main.ts` で関数の設定

```JavaScript
const greeting = () => {
  Logger.log("Hello World");
};

(global as any).greeting = greeting;

```

`(global as any).関数名 = 関数`とすることで、関数が設定できる。

## 4. App Script へデプロイ

### 4-1. `deploy` を実行

```bash
$npm run deploy
```

### 4-1-1. `GaxiosError` が発生した場合

> GaxiosError: User has not enabled the Apps Script API. Enable it by visiting https://script.google.com/home/usersettings then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.

以下、URL から Google Apps Script API の設定をオンにしてください。  
https://script.google.com/home/usersettings
