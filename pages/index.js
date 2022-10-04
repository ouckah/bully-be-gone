import Image from "next/image"
import Block from "../components/Block"

export default function Home() {
  return (
    <>

      <div className='w-full h-96 object-fill bg-fixed bg-[url("https://web.stevens.edu/news/newspoints/zoom-bg/2022/2022-zoom-background-grand-staircase.jpg")]'>
        <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-sm backdrop-brightness-50'>
          <h1 className='text-9xl text-white font-bold uppercase transition duration-300 hover:drop-shadow-lg cursor-pointer'>Cyberbullying</h1>
        </div>
      </div>

      <Block 
        title='What is Cyberbullying?'
        text="Cyberbullying is the use of electronic communication to bully a person, typically by sending messages of an intimidating or threatening nature. 
        Although social stigma has underminded the effects of cyberbullying, this form of bullying can be just as serious as it's verbal or physical forms."
        image='https://web.stevens.edu/news/newspoints/zoom-bg/2022/2022-zoom-background-Americas-cup.jpg'
        direction='left'
      />

      <Block 
        title='Who are we?'
        text="We're here to provide you as a student a safe place to report your problems and concerns to promote a positive environment for you."
        image='https://web.stevens.edu/news/newspoints/zoom-bg/2022/2022-zoom-background-Gateway-study.jpg'
        direction='right'
        primary
      />

      <Block 
        title='How does this module work?'
        text="What you would do as a student is you would submit a anonymous report on someone who has bullied you, whether it be in-person or online, physical or verbal.
        This module will then send that information to your student resources and your school will be notified! From there, the school will investigate whoever bullied you
        and you wont have to worry about that person bothering you ever again 👍"
        image='https://web.stevens.edu/news/newspoints/zoom-bg/2022/2022-zoom-background-grand-commons.jpg'
        direction='left'
      />

    </>
  )
}
