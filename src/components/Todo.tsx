import { useState } from 'react'

import Layer from '../assets/Layer.svg'
import Check from '../assets/Checkbox.svg'
import IconEdit from '../assets/Icon.svg'

import Trash from '../assets/trash-thin.svg'
import Pencil from '../assets/pencil-thin.svg'
import ExCircle from '../assets/x-thin.svg'


const Todo = ({ todo, removeTodo }) => {
    const [image, setImage] = useState(Layer)
    const [mostrarEstilo, setMostrarEstilo] = useState(false);
    const [mostrarModal, setMostarModal] = useState(false)

    const trocarImagem = () => {
        if (image === Layer) {
            setImage(Check);
        } else {
            setImage(Layer);
        }
        setMostrarEstilo(!mostrarEstilo);
    }

    const abrirModal = () => {
        setMostarModal(true)
    }

    const fecharModal = () => {
        setMostarModal(false)
    }

    const estiloText = {
        textDecoration: mostrarEstilo ? 'line-through' : 'none',
        color: mostrarEstilo ? '#AFABB6' : '#FBF9FE'
    }

    const colorText = {
        color: mostrarEstilo ? '#AFABB6' : '#FBF9FE'
    }

    return (
        <div className="todo w-full mb-2">

            <div className='flex flex-row gap-3 justify-between p-4 bg-[#17171A] border rounded-lg border-solid border-[#252529]'>

                <section className='flex'>

                    <button onClick={trocarImagem}>

                        <img src={image} alt="" className='' />

                    </button>

                    <section className='flex-col ml-4 '>

                        <h1 style={estiloText}
                            className='text-sm text-[#FBF9FE]'>{todo.text}
                        </h1>

                        <p
                            style={colorText}
                            className='text-xs text-[#AFABB6]'>{todo.amountValue} {todo.amount}
                        </p>

                    </section>

                </section>

                <section className='flex items-center'>

                    <div className=''>

                        <h1
                            style={colorText}
                            className='text-xs mr-2 w-auto'>{todo.category}
                        </h1>

                    </div>
                    <button
                        onClick={abrirModal}>
                        <img src={IconEdit} />
                    </button>

                    {mostrarModal && (

                        <div
                            className="absolute flex items-center justify-center flex-col -mt-40 w-auto h-auto bg-[#17171A] border rounded-lg border-solid border-[#252529] drop-shadow-2xl">

                            <div className="w-full pr-2">

                                <button

                                    className="w-full"
                                    onClick={fecharModal}>

                                    <img
                                        src={ExCircle} alt="fechar"
                                        className='absolute top-2 right-2 w-4 '
                                    />


                                </button>

                                <button className='flex itms-center justify-center w-full gap-2 px-6'>

                                    <img
                                        src={Pencil}
                                        className='flex w-5'
                                    />

                                    <p className="text-center text-base mb-3 ">
                                        Editar
                                    </p>
                                </button>

                                <button onClick={() => removeTodo(todo.id)}
                                    className='flex itms-center justify-center w-full gap-2 px-6'>

                                    < img src={Trash} className='flex w-5' />

                                    <p className="text-center text-base mb-4">
                                        Excluir
                                    </p>

                                </button>
                            </div>
                        </div>
                    )}
                </section>

            </div >
        </div >
    )
}

export default Todo