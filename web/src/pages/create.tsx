import Head from 'next/head'
import { FormEvent, useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'

import styles from "../styles/Create.module.css";


export default function Create() {
  const router = useRouter();

  const [] = useState('');

  async function createPet(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <>
      <div className={styles.container}>
        <main className={styles.toponpage}>
          <h1>Pet Shop Markes</h1>

          <h3>Cadastrar um novo Pet</h3>

          <form
            className={styles.formulario}
            //onSubmit={}
            method="post">

            <div className={styles.wrapper}>
              
                <label htmlFor="nomeDoPet">Nome do Pet:</label>
                <input
                  type="text"
                  required
                  id="namepet"
                  name="nome do pet"
                  //onChange=""
                  value=""
                />

                <label htmlFor="idadeDoPet">Idade do Pet:</label>
                <input
                  type="text"
                  id="idade"
                  name="idade"
                  //onChange=""
                  value=""
                />              
              
                <label htmlFor="tipoDePet">Tipo de Pet:</label>
                <input
                  type="text"
                  id="tipo"
                  name="tipodepet"
                  //onChange=""
                  value=""
                />
                          
                <label htmlFor="raca">Raça do Pet:</label>
                <input
                  type="text"
                  id="raca"
                  name="raca"
                  //onChange=""
                  value=""
                />
                           
                <label htmlFor="donodopet">Dono do Pet:</label>
                <input
                  type="text"
                  id="donodopet"
                  name="donodopet"
                  //onChange=""
                  value=""
                />
              
                <label htmlFor="telefone">Telefone do Dono:</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  //onChange=""
                  value=""
                />
              
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </main>
        
        <div className={styles.footer}>
          <button 
            type="button"
            onClick={()=> router.push('/')}
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={()=> router.push('/read')}
          >
            Visualizar Pets
          </button>
        </div>
        

      </div>
    </>
  )
}