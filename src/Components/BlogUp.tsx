import React from 'react'
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
export default function BlogUp() {

    

  return (
   <div className='container'>
    <h1>Post Content</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4">
    <Input type="text" placeholder="Title" /> 
    <Input type="text" placeholder="Category" />  
    </div>
    
 <div className="grid w-full my-3 max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>


     <div className="w-full ">
        <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              placeholder="Enter Description"
              rows={2}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <Textarea
              id="content"
              placeholder="Enter Content"
              rows={8}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
   <Button className="bg-blue-600 text-white hover:bg-blue-700 py-3 mt-5">Publish Blog</Button>
   </div>
  )
}
