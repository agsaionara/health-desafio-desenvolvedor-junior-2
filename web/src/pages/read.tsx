import axios from "axios";

import { useEffect, useState } from "react";
import styles from "../styles/Read.module.css";

interface Pet{
  id: number;
	nome: string;
	idade: string;
	tipo: string;
	donoPet: string;
	telefoneDonoPet: string;
}

export default function List() {
  const [pets, setPets] = useState<Pet[]>([]);

    useEffect(()=>{
      axios("http://localhost:3333/listpets").then(response => {
        setPets(response.data);
      })
    }, []);

  return (
    <>
      <main className={styles.home}>
        <h1>Pet Shop Markes</h1>
        <h2>Listagem dos Pets</h2>

        <div>
          <table className={styles.table}>
            <tr className={styles.headTable}>
              <th>Nome</th>
              <th>Idade</th>
              <th>Tipo</th>
              <th>Dono do Pet</th>
              <th>Telefone do Dono do Pet</th>
            </tr>
            {pets.map(pet =>{
              return(
                <tr key={pet.id}>
                  <td>{pet.nome}</td>
                  <td>{pet.idade}</td>
                  <td>{pet.tipo}</td>
                  <td>{pet.donoPet}</td>
                  <td>{pet.telefoneDonoPet}</td>
                </tr>
              )
            })}
          </table>

        </div>
      </main>

    </>
  )
}