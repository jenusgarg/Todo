export function Todos({todos}){
    return <div>
        

        {todos.map(function(e){
            return <div>
                <h1>{e.title}</h1>
                <h2>{e.description}</h2>
                <button> {e.completed== true ? "Completed":"Mark as completed"}</button>

            </div>
        })}
    </div>
}