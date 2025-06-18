// pages/index.js
import Link from 'next/link';
import { apis } from '../data/apis';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Portfólio de APIs RESTful</h1>
      <p>Selecione uma API para testar as operações CRUD:</p>
      <ul>
        {apis.map((api) => (
          <li key={api.slug} style={{ marginBottom: '10px' }}>
            {/* Adicionando key={api.slug} ao Link */}
            <Link href={`/${api.slug}`} key={api.slug} style={{ fontSize: '1.2em', color: 'blue', textDecoration: 'underline' }}>
              {api.name} ({api.language})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}