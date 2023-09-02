import React, { useState } from 'react'

import ButoonAdd from '../assets/Button.svg'


const FormItens = ({ addTodo }) => {
    const [item, setItem] = useState('')

    const [amountValue, setAmountValue] = useState('')
    const [amount, setAmount] = useState('')

    const [category, setCategory] = useState('')


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!item || !amountValue || !amount || !category) return
        addTodo(item, amountValue, amount, category)

        setItem("")
        setAmountValue("")
        setAmount("")
        setCategory("")

    }


    return (
        <div className='addTodo mb-10 '>

            <form
                onSubmit={handleSubmit}
                className='flex justify-center flex-row gap-3 w-full overflow-hidden '>

                <section className='flex-start '>

                    <p
                        className='gap-2 text-[#AFABB6]'>
                        Item
                    </p>

                    <input
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className=' rounded-md text-base p-5 leading-4 tracking-wide w-80 h-11 bg-[#111112]  border border-[#252529] focus:border-[#A881E6] focus:outline-none ' />
                </section>


                <section className=' flex-start '>

                    <p className='gap-2 text-[#AFABB6]'>
                        Quantidade
                    </p>

                    <section className='flex items-center  text-[#AFABB6]'>

                        <input

                            type="text"
                            onChange={(e) => setAmountValue(e.target.value)}
                            value={amountValue}
                            className=' rounded-l-lg text-base p-5 leading-4 tracking-wide w-20 h-11 bg-[#111112]  border border-[#252529] focus:border-[#A881E6] focus:outline-none '
                            onKeyDown={(e) => {
                                if (!(e.key >= '0' && e.key <= '9') && e.key !== 'Backspace') {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <select value={amount} onChange={(e) => setAmount(e.target.value)}
                            className='cursor-pointer rounded-r-lg p-2 w-20 h-11 text-xs bg-[#111112]  border border-[#252529] focus:border-[#A881E6] focus:outline-none'>

                            <option value="" >Select</option>
                            <option value="un" >UN.</option>
                            <option value="kg" >Kg.</option>

                        </select>

                    </section>
                </section>


                <section className='flex-start text-base text-[#AFABB6]'>

                    <p
                        className='gap-2'>Categoria
                    </p>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='cursor-pointer rounded-md text-sm p-2 leading-4 tracking-wide w-40 h-11 bg-[#111112]  border border-[#252529] focus:border-[#A881E6] focus:outline-none'>

                        <option value="" >Selecione</option>

                        <option value="Padaria">
                            Padaria
                        </option>

                        <option value="Legume">Legume

                        </option>

                        <option value="Carne">
                            Carne
                        </option>

                        <option value="Frutas">
                            Frutas
                        </option>

                        <option value="Bebidas">
                            Bebidas
                        </option>

                        <option value="Guloseimas">
                            Guloseimas
                        </option>

                        <option value="Animal">
                            Animal
                        </option>

                        <option value="Acessorios">
                            Acessorios
                        </option>

                        <option value="Casa">
                            Casa
                        </option>

                        <option value="Outros">
                            Outros
                        </option>


                    </select>

                </section>

                <button
                    type='submit'
                    className='flex justify-center items-end p-2 '>
                    <img
                        className='hover:opacity-80'
                        src={ButoonAdd}
                        alt="botao de adicionar" />
                </button>
            </form>
        </div>
    )
}

export default FormItens