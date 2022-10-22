import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


export default function Music() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music Questions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/tuffyimage.png" />
      </Head>

      <main className={styles.main}>
      <h1>
            Music Questions
            
        </h1>
        <h2> Question 1 of 10 </h2> 

        <h1>Which percussion instrument is named after its shape? </h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Circle </h2>
          </a>

          <a className={styles.card}>
            <h2>Square </h2>
          </a>

          <a className={styles.card}>
            <h2>Triangle</h2>
          </a>  

          <a className={styles.card}>
            <h2>Hexagon</h2>
          </a></div> 
        
        
        {
        function showQuestions(questions, quizContainer){
          var output = [];
          var answers;
          questions.quizContainer = questions[id]
          for(var i=0; i<questions.length; i++){
            answers=[];
            for (letter in questions[i].answers){
              answers.push('<label>' + '<input type="radio" name="question'+i+'"value="'+letter+'">'+letter+':'+questions[i].answers[letter]+'</label>');
            }
            output.push(
              '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">'+answers.join('') + '</div>'
            );
          }quizContainer.innerHTML = output.join('');
        }
        



      }

      

      </main>

      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

