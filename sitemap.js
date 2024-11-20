const fs = require('fs')

const caminhoArquivo = './dist/browser/assets/sitemap.xml';
const textoAntigo = /<lastmod>(.*?)<\/lastmod>/;
const textoNovo = `<lastmod>${new Date().toISOString().slice(0, -5) + '+00:00'}</lastmod>`

fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler sitemap.xml:', err);
    process.exit(1);
  }

  const conteudoModificado = data.replace(textoAntigo, textoNovo);

  fs.writeFile(caminhoArquivo, conteudoModificado, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no sitemap.xml:', err);
      process.exit(1);
    }

    console.info('sitemap.xml atualizado com sucesso!');
  });
});
