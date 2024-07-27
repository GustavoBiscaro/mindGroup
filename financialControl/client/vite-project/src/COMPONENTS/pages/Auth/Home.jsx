import React from 'react';
import styles from '../Auth/Home.module.css';
const Home = () => {
    return (
        <section className={styles.container}>
     <table>
  <thead>
    <tr>
      <th>Saldo</th>
      <th>Entrada</th>
      <th>Saída</th>
      <th>Saldo a Pagar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>R$ 1500,00</td>
      <td>R$ 300,00</td>
      <td>R$ 500,00</td>
      <td>R$ 1300,00</td>
    </tr>
    <tr>
      <td>R$ 2200,00</td>
      <td>R$ 1200,00</td>
      <td>R$ 800,00</td>
      <td>R$ 1600,00</td>
    </tr>
    <tr>
      <td>R$ 850,00</td>
      <td>R$ 200,00</td>
      <td>R$ 450,00</td>
      <td>R$ 600,00</td>
    </tr>
  </tbody>
</table>

<h2>Consulte as próximas tarifas</h2>

<select id="yearSelect">
  <option value="2024" selected>2024</option>
  <option value="2023">2023</option>
  <option value="2022">2022</option>
  <option value="2021">2021</option>
  <option value="2020">2020</option>   
  

</select>

<select id="monthSelect">
  </select>
    

        </section>
    )
}

export default Home