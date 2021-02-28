<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/rjsf-team/react-jsonschema-form">
    <img src="./react-bootstrap-5-logo.png" alt="Logo" width="140" height="120">
  </a>

  <h3 align="center">@volkanunsal/rjsf-bootstrap-5</h3>

  <p align="center">
  bootstrap-5 theme, fields and widgets for <a href="https://github.com/mozilla-services/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/latest/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
   <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

Exports `bootstrap-5` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [bootstrap-5](https://getbootstrap.com/docs/5.0/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `react-bootstrap >= 1.0.1`
- `@rjsf/core >= 2.2.0`

```bash
yarn add react-bootstrap @rjsf/core
```

### Installation

```bash
yarn add @volkanunsal/rjsf-bootstrap-5
```

## Usage

```js
import Form from "@volkanunsal/rjsf-bootstrap-5";
```

or

```js
import { withTheme } from "@rjsf/core";
import { Theme as Bootstrap5Theme } from "@volkanunsal/rjsf-bootstrap-5";

const Form = withTheme(Bootstrap5Theme);
```
