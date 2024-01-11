import React from 'react'
import clipPathImage from '../../assets/img/Home/clip_path_img1.jpg'
import ClipPathImg from '../ui/ClipPathImg'

function InfoLeftSection() {
  return (
    <section className='w-[100%] h-[800px] relative overflow-hidden flex flex-row items-center justify-end'>

      <div className='w-[100%] flex flex-col justify-center items-center flex-[1_0_50%] gap-10 px-20 py-[6rem]'>
        <h3 className='font-["Nunito_Black"] text-[3rem] text-main-text-color text-left'>Abraza con amor incondicional</h3>
        <p className='font-["Open_Sans_Medium"] text-main-text-color text-[1.2rem]'>Creemos en el poder transformador del amor y en las conexiones increíbles que se forman entre los humanos y sus amigos peludos. Nuestra plataforma no se trata solo de la adopción de mascotas; es una celebración de los lazos profundos e irrompibles que hacen la vida una experiencia increible.</p>
      </div>

      <ClipPathImg image={clipPathImage} width={100} height={180} />

    </section>
  )
}

export default InfoLeftSection