import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router'

function BlogDetail() {
    const {id}=useParams();
     const { isPending, error, data:blogs } = useQuery({
    queryKey: ['blogs',id], // Best practice: use a descriptive key
    queryFn: () =>
      fetch(`http://localhost:3001/blogs/${id}`).then((res) => {
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
     <div>
            <img src={blogs.coverImage} alt="" className='w-100' style={{aspectRatio:3/2}} />
            <h1 className='my-4'>{blogs.title}</h1>
            <span className='w-arh my-4 d-flex justify-content-between'><h6 className="card-title">{blogs.category[0]}</h6> <span>{blogs.date.split('T')[0]}</span></span>
                 <h5 className='mb-4'>{blogs.description}</h5>
                 <p>{blogs.content}</p>
          </div>
    
    </>
  )
}

export default BlogDetail