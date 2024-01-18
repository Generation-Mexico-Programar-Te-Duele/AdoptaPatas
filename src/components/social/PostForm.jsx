import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PostIcon from '../icons/PostIcon';
import AddPost from '../icons/AddPost';
import TextareaPost from '../shared/TextareaPost';


function PostForm() {

  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState();
  const [caption, setCaption] = useState();
  const [location, setLocation] = useState();

  const handleDrop = e => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.file[0];
    if (droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
    }
  }

  const handleDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  }

  const handleDragLeave = () => {
    setIsDragOver(false);
  }

  const handleOnChange = e => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFile(file);
    } else {
      setFile(null);
      alert("Please select an image");
    }
  }

  const handleCaptionChange = () => {
    setCaption(e.target.value);
  }

  const handleLocationChange = () => {
    setLocation(e.target.value);
  }

  // const handleSubmit = () => {
  //   console.log("Handle submit");
  // }

  // const formik = useFormik({
  //   initialValues: {
  //     fullName: "",
  //     website: "",
  //     location: "",
  //     bio: "",
  //     backgroundImage: "",
  //     image: ""
  //   },
  //   onSubmit: handleSubmit
  // })

  return (
    <section className='w-full flex flex-col gap-4 '>
      {/* <form onSubmit={formik.handleSubmit} > */}

      <div className='w-full flex flex-col gap-3 '>
        <h4 className='text-[18px] md:text-[22px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Pie de página</h4>
        <div className='w-full h-full  flex flex-col p-8 rounded-xl bg-white '>
          <TextareaPost label="Que estas pensando?" height={"min-h-[8rem]"} onChange={handleCaptionChange} />
        </div>
      </div>

      <div className='w-full flex flex-col gap-3 '>
        <h4 className='text-[18px] md:text-[22px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Comparte una foto</h4>
        <div className='w-full h-full min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] flex flex-col items-center justify-center rounded-xl bg-white'>
          {!file &&
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className='w-full h-full flex items-center justify-center'>

              <div className='w-[60%] text-center flex flex-col items-center justify-center gap-9'>
                <AddPost size={80} color={"#71717a"} />
                <h4 className='font-["Open_Sans_Medium"] text-[1.15rem] text-[#71717a]'>Arrastra imagenes aquí o escoge desde tu equipo</h4>
                <div>
                  <label htmlFor="file-upload" className='px-5 py-3 text-[.9rem] bg-text-color font-["Open_Sans_Medium"] text-white hover:bg-gray-300 transition ease-in-out duration-200 rounded-lg'>Selecciona un archivo</label>
                  <input type="file" className='file:hidden hidden' accept='image/*' onChange={handleOnChange} id="file-upload" />
                </div>
              </div>

              {/* <div className='flex items-center space-x-3 border-solid border-[1px] border-yellow-500'>

        </div> */}

            </div>
          }
          {file && <div className='w-full flex flex-1 justify-center p-5 lg:p-10 ' >
            <img src={URL.createObjectURL(file)} className='h-80 lg:h-[480px] w-full rounded-[24px] object-cover object-top' />
          </div>}

        </div>
      </div>

      <div className='w-full flex flex-col gap-3 '>
        <h4 className='text-[18px] md:text-[22px] font-["Open_Sans_Medium"] text-main-text-color tracking-[-.010rem]'>Agrega una ubicación</h4>
        <div className='w-full h-full flex flex-col gap-8 items-center justify-center p-8 rounded-xl bg-white'>
          <TextareaPost label="Agrega una ubicación" height={'min-h-[1rem]'} onChange={handleLocationChange} />
          <button type='submit' className='w-[8rem] h-[3rem] hover:text-main-text-color transition duration-200 ease-in-out cursor-pointer bg-main-text-color px-7 py-[0.5rem] text-white text-[0.95rem] rounded-3xl hover:bg-white font-["Open_Sans_Medium"]'>
            <Link to='/'>
              Crear
            </Link>
          </button>
        </div>
      </div>

      {/* </form> */}

    </section>
  )
}

export default PostForm