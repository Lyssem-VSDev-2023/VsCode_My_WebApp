// imports a single function in the module
import { returnGreeting } from './greetings_module.js';
// imports all exported components in the module
import * as allGreetingFunctions from './greetings_module.js';
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
returnGreeting('Hola');
allGreetingFunctions.returnGreeting('Hola 2');
returnGreetingLength('Hola 3');
