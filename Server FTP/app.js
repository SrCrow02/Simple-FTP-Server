const { FtpSrv } = require('ftp-srv');

const port = 21;
const ftpServer = new FtpSrv({
    url: 'ftp://ip_do_servidor:' + port, 
    greeting: "Bem-vindo ao servidor FTP meu chapa",
});

const rootDir = './teste';

ftpServer.on('login', ({ connection, username, password }, resolve, reject) => {
    if (username === 'teste' && password === 'teste') {
        resolve({ root: rootDir });
    } else {
        reject(new errors.GeneralError('Invalid username or password.'));
    }
});

ftpServer.listen()
    .then(() => {
        console.log('Servidor FTP em execução');
    })
    .catch(err => {
        console.error('Erro ao iniciar o servidor FTP:', err);
    });
