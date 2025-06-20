"use client"

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { projectsData, projectType } from '../utils/data'
import { Header } from '../components/Header'

export default function ApiTestPage() {
  const params = useParams()
  const api_slug = params ? (params['api-slug'] as string | undefined) : undefined

  const [currentApi, setCurrentApi] = useState<projectType | null>(null)
  const [tasks, setTasks] = useState<any[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskContent, setNewTaskContent] = useState('')
  const [updateTaskId, setUpdateTaskId] = useState('')
  const [updateTaskTitle, setUpdateTaskTitle] = useState('')
  const [updateTaskContent, setUpdateTaskContent] = useState('')
  const [deleteTaskId, setDeleteTaskId] = useState('')
  const [message, setMessage] = useState('')
  const [isLoadingApi, setIsLoadingApi] = useState(true)

  useEffect(() => {
    if (!api_slug) {
      setMessage('Nenhuma API foi especificada na URL.')
      setIsLoadingApi(false)
      return
    }

    const foundApi = projectsData.find(project => project.slug === api_slug)

    if (foundApi) {
      setCurrentApi(foundApi)
      fetchTasks(foundApi.url as string)
      setIsLoadingApi(false)
    } else {
      setMessage(`API com slug "${api_slug}" não encontrada.`)
      setIsLoadingApi(false)
    }
  }, [api_slug])

  const fetchTasks = async (url: string) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(await response.text())

    const data = await response.json()
    console.log('🔍 Dados recebidos da API:', data)

    if (Array.isArray(data)) {
      setTasks(data)
      setMessage('Tarefas carregadas com sucesso.')
    } else {
      setMessage('A resposta da API não é uma lista.')
    }
  } catch (error: any) {
    setMessage(`Erro ao carregar tarefas: ${error.message}`)
  }
}

  const createTask = async () => {
    if (!newTaskTitle || !newTaskContent || !currentApi?.url) return
    try {
      const response = await fetch(currentApi.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTaskTitle, content: newTaskContent })
      })
      if (!response.ok) throw new Error(await response.text())
      setNewTaskTitle('')
      setNewTaskContent('')
      fetchTasks(currentApi.url)
      setMessage('Tarefa criada com sucesso!')
    } catch (error: any) {
      setMessage(`Erro ao criar tarefa: ${error.message}`)
    }
  }

  const updateTask = async () => {
    if (!updateTaskId || !updateTaskTitle || !updateTaskContent || !currentApi?.url) return
    try {
      const response = await fetch(currentApi.url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: updateTaskId, title: updateTaskTitle, content: updateTaskContent })
      })
      if (!response.ok) throw new Error(await response.text())
      setUpdateTaskId('')
      setUpdateTaskTitle('')
      setUpdateTaskContent('')
      fetchTasks(currentApi.url)
      setMessage('Tarefa atualizada com sucesso!')
    } catch (error: any) {
      setMessage(`Erro ao atualizar tarefa: ${error.message}`)
    }
  }

  const deleteTask = async () => {
    if (!deleteTaskId || !currentApi?.url) return
    const urlToDelete = currentApi.url.includes('/api/tasks')
      ? `${currentApi.url}?id=${deleteTaskId}`
      : `${currentApi.url}/${deleteTaskId}`
    try {
      const response = await fetch(urlToDelete, { method: 'DELETE' })
      if (!response.ok) throw new Error(await response.text())
      setDeleteTaskId('')
      fetchTasks(currentApi.url)
      setMessage('Tarefa deletada com sucesso!')
    } catch (error: any) {
      setMessage(`Erro ao deletar tarefa: ${error.message}`)
    }
  }

  if (isLoadingApi) return <p className="p-6 text-lg">Carregando...</p>
  if (!currentApi) return <p className="p-6 text-red-500">{message}</p>

  return (
    <div className="min-h-screen bg-gray-50">
    <Header />
    <div className="bg-white shadow-md rounded-lg">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold mt-6">{currentApi.name} API</h1>
        <p className="text-sm text-gray-600">{currentApi.description}</p>
      </div>
    </div>    
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{currentApi.name} ({currentApi.language})</h1>
      <p className="text-sm text-gray-600">{currentApi.url}</p>

      {message && <p className="text-green-600 font-medium">{message}</p>}
      
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Criar Nova Tarefa</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input className="border p-2 rounded w-full" placeholder="Título" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} />
          <input className="border p-2 rounded w-full" placeholder="Conteúdo" value={newTaskContent} onChange={(e) => setNewTaskContent(e.target.value)} />
          <button onClick={createTask} className="bg-blue-600 text-white px-4 py-2 rounded">Criar</button>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Atualizar Tarefa</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input className="border p-2 rounded w-full" placeholder="ID" value={updateTaskId} onChange={(e) => setUpdateTaskId(e.target.value)} />
          <input className="border p-2 rounded w-full" placeholder="Novo Título" value={updateTaskTitle} onChange={(e) => setUpdateTaskTitle(e.target.value)} />
          <input className="border p-2 rounded w-full" placeholder="Novo Conteúdo" value={updateTaskContent} onChange={(e) => setUpdateTaskContent(e.target.value)} />
          <button onClick={updateTask} className="bg-yellow-500 text-white px-4 py-2 rounded">Atualizar</button>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Deletar Tarefa</h2>
        <div className="flex gap-2">
          <input className="border p-2 rounded w-full" placeholder="ID" value={deleteTaskId} onChange={(e) => setDeleteTaskId(e.target.value)} />
          <button onClick={deleteTask} className="bg-red-600 text-white px-4 py-2 rounded">Deletar</button>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Tarefas ({tasks.length})</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">Nenhuma tarefa encontrada.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task._id || task.id} className="border p-3 rounded">
                <p><strong>ID:</strong> {task._id || task.id}</p>
                <p><strong>Título:</strong> {task.title}</p>
                <p><strong>Conteúdo:</strong> {task.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
    </div>
  )
}
