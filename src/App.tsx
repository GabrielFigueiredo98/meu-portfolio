import { useState, useEffect} from 'react'
import MyPicture from './assets/pictures/MyPicture.jpg' //importando minha foto
import GFEmpress from './assets/pictures/GFEmpress.png' //importando foto GFEmpress
import ControleRede from './assets/pictures/AppGraal.png' //importando foto App controle de redes
import MesaAirHockey from './assets/pictures/MesaAirHockey.jpg' //importando foto mesa air hockey
import Robo from './assets/pictures/Robos.jpg' //importando foto Robos
import IconLinkedin from './assets/pictures/IconLinkedin.png'; // Importando icone linkedin
import IconWhatsApp from './assets/pictures/IconWhatsapp.png'; // Importando icone whatsapp
import IconEmail from './assets/pictures/IconEmail.png'; // Importando icone email
import IconBrazil from './assets/pictures/IconBrazil.png'; // Importando icone bandeira brasil
import IconEUA from './assets/pictures/IconEUA.png'; // Importando icone bandeira EUA
import IconC from './assets/pictures/IconC.png'; // Importando icone C
import IconCMM from './assets/pictures/IconC++.png'; // Importando icone C++
import IconCS from './assets/pictures/IconCS.png'; // Importando icone C#
import IconCSS from './assets/pictures/IconCSS.png'; // Importando icone CSS
import IconHTML from './assets/pictures/IconHTML.png'; // Importando icone HTML
import IconJava from './assets/pictures/IconJava.png'; // Importando icone Java
import IconJS from './assets/pictures/IconJS.png'; // Importando icone JavaScript
import IconPython from './assets/pictures/IconPython.png'; // Importando icone Python
import IconTS from './assets/pictures/IconTS.png'; // Importando icone TS
import './App.css'

// função para imprimir o menu superior da tela
function Menu({language}:{language:number}){
    return (
        <div className="flex fixed top-0 right-0 z-50 w-full justify-center lg:justify-end p-1 bg-gray-600 text-white shadow-md text-xs sm:text-base">
            
            {/*Botão Linkedin*/}
            <a 
                className='bg-gray-600 text-white flex flex-col rounded w-[40px] h-[40px] font-bold transition duration-500 ease-in-out mr-2 sm:mr-4 mt-3 sm:mt-1'
                href="https://www.linkedin.com/in/gabriel-figueiredo-971047288/"
                target="_blank" rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
            >
                <img src={IconLinkedin} alt="Ícone Linkedin" className="h-8 w-8 sm:h-10 sm:w-10 pointer-events-none" />
            </a>
            {/*Botão HOME*/}
            <a 
                className='bg-gray-600 text-white flex flex-col rounded w-[40px] h-[40px] font-bold transition duration-500 ease-in-out mr-4 sm:mr-7 mt-5 sm:mt-3'
                href="#Home"
                style={{ cursor: "pointer" }}
            >
                {language === 1 ? 'Home' : 'Início'}
            </a>           
            {/*Botão Sobre*/}
            <a 
                className='bg-gray-600 text-white flex flex-col rounded w-[40px] h-[40px] font-bold transition duration-500 ease-in-out mr-4 sm:mr-6 mt-5 sm:mt-3'
                href="#About"
                style={{ cursor: "pointer" }}
            >
                {language === 1 ? 'About' : 'Sobre'}
            </a>
            {/*Botão Qualificações*/}
            <a 
                className='bg-gray-600 text-white flex flex-col rounded w-[40px] h-[40px] font-bold transition duration-500 ease-in-out mr-12 sm:mr-20 mt-5 sm:mt-3'
                href="#Qualifications"
                style={{ cursor: "pointer" }}
            >
                {language === 1 ? 'Qualifications' : 'Qualificações'}
            </a>
            {/*Botão Projetos*/}
            <a 
                className='bg-gray-600 text-white flex flex-col rounded w-[40px] h-[40px] font-bold transition duration-500 ease-in-out mr-6 sm:mr-10 mt-5 sm:mt-3'
                href="#Projects"
                style={{ cursor: "pointer" }}
            >
                {language === 1 ? 'Projects' : 'Projetos'}
            </a>
            {/*Botão Contatos*/}
            <a 
                className='bg-gray-600 text-white flex flex-col rounded w-[40px] h-[40px] font-bold transition duration-500 ease-in-out mr-4 sm:mr-10 mt-5 sm:mt-3'
                href="#Contacts"
                style={{ cursor: "pointer" }}
            >
                {language === 1 ? 'Contacts' : 'Contatos'}
            </a>
        </div>
    )
}


// função para imprimir a parte da minha fotografia e os textos de apresentação
function Picture ({language, ChangeLanguage}:{language:number, ChangeLanguage:() => void}){    
    // Definição do componente TypewriterEffect usando uma função de componente
    // Recebe um objeto contendo duas props: 'text' (a frase a ser exibida) e 'delay' (o intervalo entre a adição de cada caractere)
    const TypewriterEffect: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
        
        // Estado local para armazenar o texto que será exibido gradualmente
        const [displayText, setDisplayText] = useState<string>('');

        // Efeito utilizado para controlar a exibição gradual do texto
        useEffect(() => {
            // Variável para acompanhar o índice atual do texto exibido
            let currentIndex = 0;

            // Configuração de um intervalo para adicionar caracteres ao texto em intervalos regulares
            const interval = setInterval(() => {
                // Verifica se ainda há caracteres a serem adicionados
                if (currentIndex <= text.length) {
                    // Atualiza o texto exibido com os caracteres até o índice atual
                    setDisplayText(text.substring(0, currentIndex));
                    // Incrementa o índice para adicionar o próximo caractere na próxima iteração
                    currentIndex++;
                } else {
                    // Se todos os caracteres já foram adicionados, limpa o intervalo para parar a execução
                    clearInterval(interval);
                }
            }, delay);

            // Retorna uma função de limpeza que será executada quando o componente for desmontado
            return () => clearInterval(interval);
        }, [text, delay]); // Dependências do efeito: 'text' e 'delay'

        // Retorna o componente com o texto exibido
        return <div  className="text-lg sm:text-4xl"style={{fontFamily: "Pacifico, cursive"}}>{displayText}</div>;
    };
      
    const [phrase, setPhrase] = useState("Olá, eu me chamo Gabriel.");
    const [isEnglish, setIsEnglish] = useState(true);

    // Função para alternar entre inglês e português
    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
        // Alterna a frase dependendo do estado atual
        if (isEnglish) {
        setPhrase("Hello, my name is Gabriel.");
        } else {
        setPhrase("Olá, eu me chamo Gabriel.");
        }
    };

    const delay = 80; // Delay entre a adição de cada caractere (em milissegundos)
       
    return (
        <div>         
            {/*Bloco do botão de mudar idioma*/}
            <div  className="flex flex-row justify-start  p-4 text-white mt-4"> 
                <h1><br/><br/><br/></h1> {/* Gambiarra pra dar espaço do Menu superior */}
                
                <h1 className='text-xs sm:text-base flex justify-start mr-2 sm:mr-4 mt-16'> {language === 1 ? 'Language(Linguagem):' : 'Linguagem(Language):'} </h1> {/*Frase Linguagem*/}
                
                {/*Botão para mudar linguagem*/}
                <button className='bg-gray-400 text-white flex rounded w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] font-bold transition duration-500 ease-in-out mr-10 mt-14 border hover:bg-green-300' onClick={() => { ChangeLanguage(); toggleLanguage();}}>
                    {language === 1 ? <img src={IconEUA} alt="Ícone EUA" className="h-7.5 w-8 sm:h-10 sm:w-10 pointer-events-none select-none" /> : <img src={IconBrazil} alt="Ícone Brasil" className="h-7.5 w-8 sm:h-10 sm:w-10 pointer-events-none select-none" />}
                </button>
            </div>
            
            {/*Bloco das outras funções*/}
            <div  className="flex flex-col items-center  p-4 text-white mt-4"> 
                <h1 className='text-lg sm:text-4xl' style={{fontFamily: "Pacifico, cursive"}}> {language === 1 ? 'Computer engineer' : 'Engenheiro da Computação'} </h1> {/*Frase Linguagem*/}
                <img src={MyPicture} alt="Minha Foto" className="w-64 h-64 rounded-full object-cover mx-auto mt-4 mb-4 pointer-events-none select-none" />
                <TypewriterEffect text={phrase} delay={delay}/>
            </div>
        </div>
    );
}

// função parte "Sobre"
function About ({language}:{language:number}){
    return (
        <div className= "flex flex-col p-4 text-white bg-gray-600 sm:mt-14 max-w-3x4 w-3/4 mr-auto rounded-xl animate-walk">
            <h1 style={{fontSize: "30px"}}> {language === 1 ? <b>About:</b> : <b>Sobre:</b>} </h1>
            {language === 1 ?
                <h2>  <br/>Hello! I am a professional graduated in <b>Computer Engineering</b> from Minas Gerais State University (UEMG), with a burning passion for creating innovative and efficient solutions in the world of technology. My journey has been marked by an <b>incessant exploration of different programming environments</b>, using a <b>variety of programming languages</b> to develop responsive applications and systems.<br/><br/>
                With a solid academic background and diverse practical experiences, I focus on providing tailored solutions for a wide range of challenges. My skills range from <b>software development to working with hardware</b>, including the use of microcontrollers and their peripherals.<br/><br/>
                The dynamic environment of technology fascinates me, and I am constantly seeking opportunities that allow me to channel my creativity to propose and develop innovative solutions. I am committed to <b>delivering high-quality results</b>, combining my technical expertise with a user-centered approach.<br/><br/>
                Whether creating intuitive applications, optimizing processes, or exploring new frontiers of technology, I am always ready to embrace new challenges and turn ideas into reality. I am eager to collaborate on exciting projects and be part of teams that share my passion for innovation and technical excellence. </h2>
                : 
                <h2> <br/>Olá! Sou um profissional formado em <b>Engenharia da Computação</b> pela Universidade do Estado de Minas Gerais (UEMG), com uma paixão ardente pela criação de soluções inovadoras e eficientes no mundo da tecnologia. Minha jornada tem sido marcada por uma <b>exploração incessante de diferentes ambientes de      programação</b>, utilizando uma <b>variedade de linguagens de programação</b> para desenvolver aplicativos e sistemas responsivos.<br/><br/>
                Com uma sólida formação acadêmica e diversas experiências práticas, concentro-me em oferecer soluções sob medida para uma ampla gama de desafios. Minhas habilidades abrangem desde o <b>desenvolvimento de software até o trabalho com hardware</b>, incluindo a utilização de microcontroladores e seus periféricos.<br/><br/>
                O ambiente dinâmico da tecnologia me fascina, e busco constantemente oportunidades que me permitam canalizar minha criatividade para propor e desenvolver soluções inovadoras. Estou comprometido em <b>entregar resultados de alta qualidade</b>, combinando minha expertise técnica com uma abordagem centrada no usuário.<br/><br/>
                Seja criando aplicativos intuitivos, otimizando processos ou explorando novas fronteiras da tecnologia, estou sempre pronto para abraçar novos desafios e transformar ideias em realidade. Estou ansioso para colaborar em projetos empolgantes e fazer parte de equipes que compartilham minha paixão por inovação e excelência técnica.  </h2>}
        </div>
    );
}

// função parte "Qualificações"
function Qualifications ({language}:{language:number}){
    return (
        <div className="flex flex-col p-4 text-white bg-gray-600 mt-14 max-w-3x4 w-3/4 ml-auto mb-4 rounded-xl animate-walkInv">
            <h1 style={{fontSize: "30px"}}>{language === 1 ? 'Qualifications:' : 'Qualificações:'}<br/><br/></h1>
            
            <ul className="list-disc pl-6"> {/* Bloco de formação academica*/}
                <li>
                <strong>{language === 1 ? 'Academic background:' : 'Formação acadêmica:'}</strong>
                <ul className="list-disc pl-6">
                    {language === 1 ? <li> Bachelor of Computer Engineering from Minas Gerais State University (UEMG). </li> : <li> Bacharel em Engenharia da Computação pela Universidade do Estado de Minas Gerais (UEMG). </li>}
                </ul>
                </li>
            </ul>

            <p><br/></p> {/*Saltando uma linha entre um bloco e outro*/}

            
            {language === 1 ?
            <ul className="list-disc pl-6"> {/* Bloco de Experiencia em Software*/}
                <li>
                    <strong> Software experience </strong>
                    <ul className="list-disc pl-6">
                        <li>Solid understanding of programming logic and object-oriented programming;</li>
                        <li>Proficiency in various programming languages such as C, C++, C#, Python, Java, JavaScript, CSS, HTML, TypeScript;</li>
                        <li>Experience with relational databases (SQL);</li>
                        <li>Familiarity with modern frameworks, such as React.js, Tailwind, Next.js, Node.js, among others;</li>
                        <li>Participation in practical projects related to the field.</li>
                    </ul>
                </li>
            </ul>
            :
            <ul className="list-disc pl-6"> {/* Bloco de Experiencia em Software*/}
                <li>
                    <strong> Experiência em software </strong>
                    <ul className="list-disc pl-6">
                        <li>Conhecimentos sólidos em lógica de programação e programação orientada a objetos; </li>
                        <li>Conhecimentos em diversas linguagens de programação como C, C++, C#, Python, Java, JavaScript, CSS, HTML, TypeScript; </li>
                        <li>Experiência em bancos de dados relacionais (SQL); </li>
                        <li>Familiarizado com frameworks modernos, tais como React.js, Tailwind, Next.js, Node.js, entre outros; </li>
                        <li>Participação em projetos práticos relacionados à área.</li>
                    </ul>
                </li>
            </ul>
            }

            <p><br/></p> {/*Saltando uma linha entre um bloco e outro*/}
            
            {language === 1 ?          
            <ul className="list-disc pl-6"> {/* Hardware Experience Block */}
                <li>
                <strong>Hardware Experience:</strong>
                <ul className="list-disc pl-6">
                    <li>Practical knowledge in hardware, with a focus on microcontrollers;</li>
                    <li>Participation in practical projects related to the field during graduation.</li>
                </ul>
                </li>
            </ul>
            :
            <ul className="list-disc pl-6"> {/* Bloco de Experiencia em Hardware*/}
                <li>
                <strong>Experiência em Hardware:</strong>
                <ul className="list-disc pl-6">
                    <li>Conhecimento prático em hardware, com foco em microcontroladores;</li>
                    <li>Participação em projetos práticos relacionados à área durante a graduação.</li>
                </ul>
                </li>
            </ul>
            }
            
            <p><br/></p> {/*Saltando uma linha entre um bloco e outro*/}

            {language === 1 ?
            <ul className="list-disc pl-6"> {/* Linguistic Skills Block */}
                <li>
                <strong>Linguistic Skills:</strong>
                <ul className="list-disc pl-6">
                    <li>Fluency in Brazilian Portuguese;</li>
                    <li>Advanced intermediate level in English;</li>
                    <li>Advanced intermediate level in Spanish.</li>
                </ul>
                </li>
            </ul>
            :
            <ul className="list-disc pl-6"> {/* Bloco de Habilidades linguisticas*/}
                <li>
                <strong>Habilidades Linguísticas:</strong>
                <ul className="list-disc pl-6">
                    <li>Fluência no Português do Brasil;</li>
                    <li>Inglês intermediário avançado;</li>
                    <li>Espanhol intermediário avançado.</li>
                </ul>
                </li>
            </ul>
            }

            <p><br/></p> {/*Saltando uma linha entre um bloco e outro*/}

            {language === 1 ?
            <ul className="list-disc pl-6"> {/* Other Skills Block */}
                <li>
                <strong>Other Skills:</strong>
                <ul className="list-disc pl-6">
                    <li>Ability to learn new technologies and areas of computing easily;</li>
                    <li>Ability to quickly assimilate new programming languages;</li>
                    <li>Commitment to continuously updating knowledge, keeping up with market trends and innovations in the technology field.</li>
                </ul>
                </li>
            </ul>
            :
            <ul className="list-disc pl-6"> {/* Bloco de Outras habilidades*/}
                <li>
                <strong>Outras Habilidades:</strong>
                <ul className="list-disc pl-6">
                    <li>Facilidade em aprender novas tecnologias e áreas da computação;</li>
                    <li>Capacidade de assimilar rapidamente novas linguagens de programação;</li>
                    <li>Comprometimento com a atualização constante dos conhecimentos, acompanhando as tendências do mercado e as inovações na área de tecnologia.</li>
                </ul>
                </li>
            </ul>
            }
        </div>
    );
}

// função para imprimir o menu superior da tela
function Projects({language}:{language:number}){  
    return(
        <div className="flex justify-center flex-col items-center p-4 mt-14 bg-gray-600 text-white">
                <h1 style={{fontSize: "40px"}}> <b>{language === 1 ? 'Projects:' : 'Projetos:'}</b> <br/> <br/> </h1>

                {/* Bloco de configuração  app GFEmpress*/}
                <h2 style={{fontSize: "25px"}}> <b> GFEmpress </b> </h2>
                <div className="mt-4 mb-4" style={{width: "100%", maxWidth: "800px"}}>
                    <img src={GFEmpress} alt="Foto GFEmpress" className="w-full h-auto pointer-events-none select-none" />
                </div>
                <p className="mt-4 mb-4 max-w-xl text-justify"> {language === 1 ? 'Project developed in C# language and SQL Server database aimed at assisting in the enterprise management process in various companies.' : 'Projeto desenvolvido na linguagem C# e banco de dados SQL Server com o intuito de auxiliar no processo de gerenciamento empresarial em diversas indústrias.'}<br/> <br/> <br/> </p>
                
                {/* Bloco de configuração app controle de redes*/}
                <h2 style={{fontSize: "25px"}}> <b> {language === 1 ? 'Network control application' : 'Aplicativo para controle de redes' }</b> </h2>
                <div className="mt-4 mb-4" style={{width: "100%", maxWidth: "600px"}}>
                    <img src={ControleRede} alt="Foto App Controle Redes" className="w-full h-auto pointer-events-none select-none" />
                </div>
                <p className="mt-4 mb-4 max-w-xl text-justify">
                    {language === 1 ?
                    'This project was conceived for the company Rede Graal with the purpose of monitoring the performance of its servers registered on the Pfsense platform and taking actions based on the results obtained. The software implementation was carried out using the C# programming language, allowing access to Pfsense platform data through the Restful API. Additionally, a SQL Server database was developed to store the received information.'
                    :
                    'Este projeto foi concebido para a empresa Rede Graal com o propósito de monitorar o desempenho de seus servidores registrados na plataforma Pfsense e tomar medidas com base nos resultados obtidos. A implementação do software foi realizada utilizando a linguagem de programação C#, permitindo o acesso aos dados da plataforma Pfsense por meio da API Restful. Além disso, um banco de dados SQL Server foi desenvolvido para armazenar as informações recebidas.'}
                     <br/> <br/> <br/>
                </p>

                {/* Bloco de configuração mesa airhockey*/}
                <h2 style={{fontSize: "25px"}}> <b> {language === 1 ? 'Air hockey table' : 'Mesa de air hockey'} </b> </h2>
                <div className="mt-4 mb-4" style={{width: "100%", maxWidth: "500px"}}>
                    <img src={MesaAirHockey} alt="Foto Mesa air hockey" className="w-full h-auto pointer-events-none select-none" />
                </div>
                <p className="mt-4 mb-4 max-w-xl text-justify"> {language === 1 ?
                'Project developed at Minas Gerais State University with the aim of serving both students and teachers in the leisure domain at the facility. For its implementation, an Arduino was used to control the various peripherals involved.'
                :
                'Projeto desenvolvido na Universidade do Estado de Minas Gerais com o objetivo de servir tanto aos alunos quanto aos professores no domínio do lazer na unidade. Para sua implementação, empregou-se um Arduino para controlar os diversos periféricos envolvidos.'}<br/> <br/> <br/>
                </p>

                {/* Bloco de configuração robôs*/}
                <h2 style={{fontSize: "25px"}}> <b> {language === 1 ? 'Combat robots' : 'Robôs de combate'}</b> </h2>
                <div className="mt-4 mb-4" style={{width: "100%", maxWidth: "500px"}}>
                    <img src={Robo} alt="Foto Robos de Combate" className="w-full h-auto pointer-events-none select-none" />
                </div>
                <p className="mt-4 mb-4 max-w-xl text-justify"> {language === 1 ?
                'Like the previous project, combat robots were developed at Minas Gerais State University with the purpose of providing entertainment in the institution\'s leisure area. For their implementation, ESP32 boards were used to control the peripherals. Additionally, these robots connect via Bluetooth to notebooks, which receive commands through Xbox One console controls, serving as intermediaries for the ESP32.'
                :
                'Assim como o projeto anterior, os robôs de combate foram desenvolvidos na Universidade do Estado de Minas Gerais com o propósito de oferecer entretenimento na área de lazer da instituição. Para sua implementação, utilizaram-se placas ESP32 para controlar os periféricos. Além disso, esses robôs se conectam via Bluetooth aos notebooks, que recebem os comandos por meio dos controles do console Xbox One, servindo como intermediários para os ESP32.'
                }<br/> <br/> <br/>
                </p>
        </div>
    )
}

// função geral
function App (){        
       
    // funções para chamar links das linguagens de programação
    function CClick() { // função para chamar página da linguagem C
        window.open('https://www.programiz.com/c-programming', '_blank');
    }
    function CMMClick() { // função para chamar página da linguagem C++
        window.open('https://www.coursera.org/articles/what-is-c-plus-plus', '_blank');
    }
    function CSClick() { // função para chamar página da linguagem C#
        window.open('https://dotnet.microsoft.com/en-us/learn/csharp', '_blank');
    }
    function CSSClick() { // função para chamar página da linguagem CSS
        window.open('https://www.w3schools.com/css/css_intro.asp', '_blank');
    }
    function HTMLClick() { // função para chamar página da linguagem HTML
        window.open('https://html.spec.whatwg.org/multipage/', '_blank');
    }
    function JavaClick() { // função para chamar página da linguagem Java
        window.open('https://www.oracle.com/java/', '_blank');
    }
    function JSClick() { // função para chamar página da linguagem JavaScript
        window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank');
    }
    function PythonClick() { // função para chamar página da linguagem Python
        window.open('https://www.python.org/', '_blank');
    }
    function TSClick() { // função para chamar página do TypeScript
        window.open('https://www.typescriptlang.org/', '_blank');
    }

    

    // funções para controlar idioma
    const [language, setLanguage] = useState(0); // Variável que recebe o idioma

    // função para controlar o idioma
    function EditLanguage() {
        const newLanguage = language === 0 ? 1 : 0;
        setLanguage(newLanguage);
        return newLanguage;
    }

    // retornos na tela
    return(      
        <div className='flex w-full flex-col overflow-x-auto bg-gray-700'>
            <p id="Home"></p> {/*Mapa para o botão Home vir para o início da página*/}
            <Menu language={language}/> {/* Chamando a função do menu superior */}
            <Picture language={language} ChangeLanguage={EditLanguage}/> {/* Chamando função de imagem e texto de apresentação*/}
            <br/><br/>
            
            {/*Div dos simbolos das linguagens animados (animate-walk foi colocado no arquivo tailwind.config.js)*/}
            <div className='min-h-[100px] relative flex flex-row sm:px-[5%] md:px-[20%] xl:px-[30%] 2xl:mt-10 justify-center items-center animate-walk'>
                <img src={IconC} alt="Ícone C" className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 xl:ml-14 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={CClick} draggable="false"/>
                <img src={IconCMM} alt="Ícone C++" className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={CMMClick} draggable="false"/>
                <img src={IconCS} alt="Ícone C#" className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={CSClick} draggable="false"/>
                <img src={IconCSS} alt="Ícone CSS" className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={CSSClick} draggable="false"/>
                <img src={IconHTML} alt="Ícone HTML" className="h-5 w-10 sm:h-6 sm:w-20 md:h-7 md:w-20 xl:h-8 xl:w-20 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={HTMLClick} draggable="false"/>
                <img src={IconJava} alt="Ícone Java" className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={JavaClick} draggable="false"/>
                <img src={IconJS} alt="Ícone JavaScript" className="h-5 w-10 sm:h-6 sm:w-20 md:h-7 md:w-20 xl:h-8 xl:w-20 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={JSClick} draggable="false"/>
                <img src={IconPython} alt="Ícone Python" className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 mr-2 sm:mr-4 md:mr-7 xl:mr-20" onClick={PythonClick} draggable="false"/>
                <img src={IconTS} alt="Ícone TypeScript" className="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 xl:h-12 xl:w-12 md:mr-7 xl:mr-20" onClick={TSClick} draggable="false"/>
            </div>

            <br/> <br/>
            <p id="About"></p> {/*Mapa para o botão Sobre vir para a seção Sobre*/}
            <About language={language}/> {/* Chamando função Sobre*/}
            <p id="Qualifications"></p> {/*Mapa para o botão Qualificações vir para a seção Qualificações*/}
            <Qualifications language={language}/> {/* Chamando função Qualificações*/}
            <p id="Projects"></p> {/*Mapa para o botão Projetos vir para a seção Projetos*/}
            <Projects language={language}/> {/* Chamando função Projetos*/}
            <p id="Contacts"></p> {/*Mapa para o botão Contatos vir para a seção Contatos*/}
            <div className="flex flex-col items-center p-4 text-white">
                <h1 style={{fontSize: "30px"}} className='mb-6'> {language === 1 ? 'Contacts:' : 'Contatos:'}</h1>
                <div>
                    {/*Botão Whatsapp*/}
                    <a 
                        className='flex flex-col items-center rounded w-[40px] h-[40px] font-bold transition duration-500 hover:bg-green-300 ease-in-out mb-10 flash'
                        href="https://wa.me/5537999966556"
                        target="_blank"
                        style={{ cursor: "pointer" }}
                    >
                        <img src={IconWhatsApp} alt="Ícone Whatsapp" className="h-10 w-10 select-none pointer-events-none"/> 
                        <span style={{whiteSpace: "nowrap"}}> (37)99996-6556</span>
                    </a>
                </div>
                <div className="mt-4">
                    {/*Botão Email*/}
                    <a 
                        // classe 'flash' usada no className criada no App.css
                        className='flex flex-col items-center rounded w-[40px] h-[40px] font-bold transition duration-500 hover:bg-green-300 ease-in-out mb-10 flash'
                        href="mailto:gabriel.jonas.figueiredo@gmail.com"
                        target="_blank" rel="noopener noreferrer"
                        style={{ cursor: "pointer" }}
                    >
                        <img src={IconEmail} alt="Ícone Email" className="h-10 w-10 select-none pointer-events-none" />
                        <h1>gabriel.jonas.figueiredo@gmail.com</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App