# Ratting Movies Backend

Esse projeto busca resolver um desafio de construção de um frontend em react com as funcinalidades de login, criação de filmes, avaliação de filmes, e criação em massa (via arquivo json) para filmes e avaliações

Requisitos

<table>
  <thead>
    <th> Tecnologia </th>
    <th> Versão </th>
  </thead>
  <tbody>
    <tr>
      <td> NodeJs </td>
      <td> 18.1.0 </td>
    </tr>   
  </tbody>
</table>

 ### Features
 <ul>   
   <li> Login </li>
   <li> Criação de filme </li>
   <li> Criação de avaliação de filme  </li>
   <li> Atualização de avaliação de filme </li>
   <li> Criação de avaliações em massa </li>
   <li> Criação de filmes em massa </li>
 </ul>

 ### Install and run

 <li>
    Clone o presente repositório em seu computador

     git@github.com:silvavinicyus/rating-movies.git    
 </li>
 
 <li>
    Instale as dependencias do projeto

     npm install    
 </li>

 <li>
    Execute o frontend 

     npm run dev   
 </li>


 ### Seed

 Para utilizar o sistema, utilize o usuário padrão criado com os seeds do rails:

 email: admin@rotten.com <br>
 password: admin


 ### Importação de dados

 Para fazer a importação de filmes e notas, execute os seguintes passos:

 * Faça login na aplicação, com o usuário e senha citado acima

 * Na página inicial, seleciona a opção "Importar"
![image](https://github.com/silvavinicyus/rating-movies/assets/24615008/10a09089-9dae-4f97-8ca0-1d266ed04cb8)

 * No modal aberto, escolha a opção de importação desejada (Filmes ou notas) e clique em "Save"

![image](https://github.com/silvavinicyus/rating-movies/assets/24615008/0e7aac20-5740-45ed-8082-28ac131b1950)

* O sistema então processará a importação e em alguns segundos aparecerá na tela inicial os novos dados.
