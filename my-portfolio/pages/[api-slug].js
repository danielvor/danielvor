import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { apis } from '../data/apis'; // Verifique novamente este caminho!

export default function ApiTestPage() {
  const router = useRouter();
  // AQUI É A CORREÇÃO CRÍTICA PARA PEGAR O SLUG CORRETAMENTE
  const api_slug = router.query['api-slug'];
  const isReady = router.isReady;

  const [currentApi, setCurrentApi] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskContent, setNewTaskContent] = useState('');
  const [updateTaskId, setUpdateTaskId] = useState('');
  const [updateTaskTitle, setUpdateTaskTitle] = useState('');
  const [updateTaskContent, setUpdateTaskContent] = useState('');
  const [deleteTaskId, setDeleteTaskId] = useState('');
  const [message, setMessage] = useState('');

  // Estado para controlar se estamos carregando as informações da API
  const [isLoadingApi, setIsLoadingApi] = useState(true);

  // useEffect para buscar os dados da API quando o router estiver pronto
  useEffect(() => {
    console.log('--- useEffect execution ---');
    console.log('isReady:', isReady);
    console.log('api_slug from router.query[\'api-slug\']:', api_slug);

    if (!isReady) {
      console.log('Router not ready yet. Skipping API lookup.');
      return; // Sai da função se o router não estiver pronto
    }

    if (api_slug) {
      const foundApi = apis.find((api) => api.slug === api_slug);
      console.log('API found by apis.find():', foundApi);

      if (foundApi) {
        setCurrentApi(foundApi);
        console.log('setCurrentApi called with:', foundApi);
        fetchTasks(foundApi.url); // Tenta buscar as tarefas
        setIsLoadingApi(false); // API encontrada, desativa o carregamento
      } else {
        setMessage(`Erro: API com slug "${api_slug}" não encontrada. Verifique 'data/apis.js'.`);
        setIsLoadingApi(false); // Desativa o carregamento, pois a API não foi encontrada
        console.error(`API with slug "${api_slug}" not found in apis list.`);
      }
    } else {
        setMessage('Erro: O slug da API não foi fornecido na URL.');
        setIsLoadingApi(false); // Desativa o carregamento
        console.error('API slug is missing from URL query params (or still undefined).');
    }
    console.log('--- End useEffect execution ---');
  }, [api_slug, isReady]); // Dependências do useEffect

  // Função para buscar todas as tarefas
  const fetchTasks = async (url) => {
    console.log('Attempting to fetch tasks from:', url);
    try {
      const response = await fetch(url);
      console.log('API Response Status:', response.status);

      if (!response.ok) {
        // Tenta pegar o texto da resposta de erro para mais detalhes
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }
      const data = await response.json();
      console.log('Received data from API:', data);

      if (Array.isArray(data)) {
        setTasks(data);
        setMessage('Tarefas carregadas com sucesso.');
      } else {
        console.error('Received data is not an array:', data);
        setMessage('Erro: A API não retornou uma lista de tarefas no formato esperado.');
        setTasks([]);
      }

    } catch (error) {
      // Este erro geralmente é o CORS que bloqueia a resposta, não a requisição em si
      console.error('Error fetching tasks:', error);
      setMessage(`Erro ao carregar tarefas: ${error.message}. (Verifique CORS na API se for externa!)`);
      setTasks([]);
    }
  };

  // Função para criar uma nova tarefa
  const createTask = async () => {
    if (!newTaskTitle || !newTaskContent) {
      setMessage('Título e conteúdo são obrigatórios para criar uma tarefa.');
      return;
    }
    try {
      const response = await fetch(currentApi.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTaskTitle, content: newTaskContent }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }
      const data = await response.json();
      setMessage('Tarefa criada com sucesso!');
      setNewTaskTitle('');
      setNewTaskContent('');
      fetchTasks(currentApi.url); // Recarrega as tarefas após a criação
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      setMessage(`Erro ao criar tarefa: ${error.message}`);
    }
  };

  // Função para atualizar uma tarefa existente
  const updateTask = async () => {
    if (!updateTaskId || !updateTaskTitle || !updateTaskContent) {
      setMessage('ID, título e conteúdo são obrigatórios para atualizar uma tarefa.');
      return;
    }
    try {
      const response = await fetch(currentApi.url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: updateTaskId, // Ajuste para _id se sua API espera _id no corpo para PUT
          title: updateTaskTitle,
          content: updateTaskContent,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }
      const data = await response.json();
      setMessage('Tarefa atualizada com sucesso!');
      setUpdateTaskId('');
      setUpdateTaskTitle('');
      setUpdateTaskContent('');
      fetchTasks(currentApi.url); // Recarrega as tarefas após a atualização
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      setMessage(`Erro ao atualizar tarefa: ${error.message}`);
    }
  };

  // Função para deletar uma tarefa
  const deleteTask = async () => {
    if (!deleteTaskId) {
      setMessage('ID da tarefa é obrigatório para deletar.');
      return;
    }
    try {
      // Para a maioria das APIs, DELETE com ID vai na URL ou Query Param
      // A Node.js API interna usa query param para DELETE
      const urlToDelete = currentApi.url.includes('/api/tasks')
        ? `${currentApi.url}?id=${deleteTaskId}`
        : `${currentApi.url}/${deleteTaskId}`; // Assumindo que outras APIs usam ID na URL

      const response = await fetch(urlToDelete, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
      }
      setMessage('Tarefa deletada com sucesso!');
      setDeleteTaskId('');
      fetchTasks(currentApi.url); // Recarrega as tarefas após a deleção
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
      setMessage(`Erro ao deletar tarefa: ${error.message}`);
    }
  };

  // Logs para depuração final antes da renderização
  console.log('Rendering component. currentApi state:', currentApi);
  console.log('Rendering component. isLoadingApi state:', isLoadingApi);

  // Condição para exibir o estado de carregamento ou erro
  if (isLoadingApi) {
    return <p>Carregando API...</p>;
  }

  // Se não está mais carregando e currentApi ainda é null, significa que não foi encontrada
  if (!currentApi) {
    return <p>{message || "API não encontrada."}</p>;
  }

  // Se tudo deu certo, renderiza o formulário e a lista de tarefas
  return (
    <div style={{ padding: '20px' }}>
      <h1>Testando: {currentApi.name} ({currentApi.language})</h1>
      <p>Base URL: {currentApi.url}</p>

      {message && <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>}

      <hr />

      <h2>Criar Nova Tarefa</h2>
      <input
        type="text"
        placeholder="Título da Tarefa"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <input
        type="text"
        placeholder="Conteúdo da Tarefa"
        value={newTaskContent}
        onChange={(e) => setNewTaskContent(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <button onClick={createTask} style={{ padding: '8px 15px' }}>Criar</button>

      <hr />

      <h2>Atualizar Tarefa</h2>
      <input
        type="text"
        placeholder="ID da Tarefa"
        value={updateTaskId}
        onChange={(e) => setUpdateTaskId(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <input
        type="text"
        placeholder="Novo Título"
        value={updateTaskTitle}
        onChange={(e) => setUpdateTaskTitle(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <input
        type="text"
        placeholder="Novo Conteúdo"
        value={updateTaskContent}
        onChange={(e) => setUpdateTaskContent(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <button onClick={updateTask} style={{ padding: '8px 15px' }}>Atualizar</button>

      <hr />

      <h2>Deletar Tarefa</h2>
      <input
        type="text"
        placeholder="ID da Tarefa"
        value={deleteTaskId}
        onChange={(e) => setDeleteTaskId(e.target.value)}
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <button onClick={deleteTask} style={{ padding: '8px 15px' }}>Deletar</button>

      <hr />

      <h2>Tarefas Atuais ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa encontrada.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map((task) => (
            // Acessa o ID como _id (MongoDB padrão) ou id (outras APIs)
            <li key={task._id || task.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
              <strong>ID:</strong> {task._id || task.id} <br />
              <strong>Título:</strong> {task.title} <br />
              <strong>Conteúdo:</strong> {task.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}