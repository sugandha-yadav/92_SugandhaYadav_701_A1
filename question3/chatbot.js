module.exports.ChatbotReply = function(message)
{
    this.Bot_Age = 25;
    this.Bot_Name = "bot";
    this.Bot_University = "VNSGU";
    this.Bot_Country = "India";

    message = message.toLowerCase();

    // Greeting
    if (message.indexOf("hey") > -1 ||
        message.indexOf("good morning") > -1 ||
        message.indexOf("good evening") > -1)
    {
        return "Hello! Nice to meet you.";
    }

    // Name
    else if (message.indexOf("what is your name") > -1 ||
             message.indexOf("who are you") > -1)
    {
        return "My name is " + this.Bot_Name;
    }

    // College
    else if (message.indexOf("which university") > -1 ||
             message.indexOf("where do you study") > -1)
    {
        return "I study at " + this.Bot_University;
    }

    // Country
    else if (message.indexOf("which country") > -1 ||
             message.indexOf("where are you from") > -1)
    {
        return "I am from " + this.Bot_Country;
    }

    // Age
    else if (message.indexOf("how old are you") > -1)
    {
        return "I am " + this.Bot_Age + " years old.";
    }

    // Goodbye
    else if (message.indexOf("bye") > -1 ||
             message.indexOf("goodbye") > -1)
    {
        return "Goodbye! Have a great day.";
    }

    return "Sorry, I didn't understand your question.";
}