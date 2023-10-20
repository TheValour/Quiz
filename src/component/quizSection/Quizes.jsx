import React from 'react'
import Quiz from './Quiz'
import { quizetype } from '../../data'

export default function Quizes() {
    const quizField = quizetype.map((quiz) => {
        return <Quiz title={quiz.title} desc={quiz.desc}/>
    })

  return (
    <div className='flex flex-row justify-evenly w-screen m-8'>
        {quizField}
    </div>
  )
}
