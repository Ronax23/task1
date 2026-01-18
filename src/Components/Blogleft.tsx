import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { Link } from 'react-router';

function Blogleft() {
   const { isPending, error, data } = useQuery({
    queryKey: ['blogs'], // Best practice: use a descriptive key
    queryFn: () =>
      fetch('http://localhost:3001/blogs').then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      }),
  });
if (isPending) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }
 return (
<>

 {data && data.map((item:Object, index:Number) => (
            <Link to={`blog/${item.id}`} className="col-12 my-4 mx-2 p-4" style={{textDecoration:"none"}}>
              {/* 3. Use h-100 to keep heights equal as we discussed earlier */}
              <div className="card shadow-sm" key={item.id || index}>
                <div className="card-body">
                  <span className='d-flex justify-content-between'><h6 className="card-title">{item.category[0]}</h6> <span>{item.date.split('T')[0]}</span></span>
                  <h5>{item.title}</h5>
                  <p>{item.description.split(0,60)}</p>
                  <p className="card-text text-secondary">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
</>
  )
}

export default Blogleft