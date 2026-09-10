# Portfólio de André Gonzaga

Meu portfólio pessoal, com apresentação, catálogo de projetos, tecnologias e contatos.
Feito com HTML, CSS e JavaScript, sem framework ou etapa de compilação.

## Abrir ou compartilhar

Baixe o `index.html` e abra no navegador. Os estilos e o JavaScript estão dentro
dele, então basta enviar esse arquivo. Os links de contato precisam de internet.

## Editar

O `index.html` é a versão completa do portfólio:

- O `<style>` no início contém os estilos e as regras para celular.
- O `<main>` reúne as seções da página.
- O `<script>` no final controla o menu e atualiza o ano do rodapé.

`css/style.css` e `script.js` são cópias separadas para consulta. Se alterar essas
cópias, atualize também os blocos correspondentes no HTML antes de compartilhar.
Os demais arquivos em `css/` e a pasta `img/` vieram da versão anterior e não são
carregados pela página atual.

## Formatação

O padrão está em `.editorconfig` e `.prettierrc.json`: dois espaços de indentação,
UTF-8 e linhas formatadas pelo Prettier. Com Node.js instalado:

```sh
npx prettier --write index.html "css/*.css" script.js README.md
```

## Catálogo

Cada projeto fica em um `<article class="project">` na seção `#projetos`.
Inclua apenas descrições e funcionalidades que possam ser divulgadas, sem nomes,
dados, telas reais ou links privados de clientes.
