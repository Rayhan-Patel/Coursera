var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function Greets(){
    
for( Name in names)
    {
        var first_char=names[Name].charAt(0).toLowerCase()
        if(first_char=="j")
        {
            Bye.speak(names[Name])
        }
        else
        {
            hello.speak(names[Name])
        }
    }
}
Greets()
