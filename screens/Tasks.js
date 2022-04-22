import React,{useState} from 'react'
import { View,StyleSheet, SafeAreaView,Text } from 'react-native';
import AppHeader from '../components/appHeader';
import AppTextInput from '../components/appTextInput';
import ItemsCard from '../components/itemsCard';
import { Formik } from 'formik';
import * as Yup  from 'yup';


const validationSchema = Yup.object().shape({
    
    title : Yup.string().required().label("Task")

})





const todoItemsdata = [
    {
        id:1,
        title:"Do homework"
    },
    {
        id:2,
        title:"Do house work"
    },
    {
        id:3,
        title:"Do push ups"
    },
    {
        id:4,
        title:"Go to the market"
    }
]




const TasksScreen = () => {
    const [todoItems,setTodoItems] = useState(todoItemsdata);
   

    const handleDeleteItem = (selectedTodoItem) => {
        setTodoItems(todoItems.filter(item=>item.id !== selectedTodoItem.id))
    }

    const handleTextChange = (text) => {
        setTitle(text)
    }

    const handleEnterTask = ({title}) => {
       
        let newTodoItem = {
            id:Math.random(todoItems.length + 1,100),
            title
        }
        let  newtodoItems = [...todoItems,newTodoItem]
        setTodoItems(newtodoItems)
        
        
    }
    

    return ( 
        <SafeAreaView style={styles.container}>
            <AppHeader itemsTotal={todoItems.length}/>
            <View style={styles.textInputContainer}>
                <Formik initialValues={{title:""}} onSubmit={(title) => handleEnterTask(title) } validationSchema={validationSchema}>
                    {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                        <>
                            <AppTextInput clearTextOnFocus={true} onBlur={()=>setFieldTouched("title")} clearButtonMode="while-editing" iconType='add-box' autoCapitalize="characters" onChangeText={handleChange("title")} onhandleEnterTask={handleSubmit} placeholder="Enter a task"/>
                            {touched.title && <Text style={styles.error}>{errors.title}</Text>}
                        </>
                    )}
                </Formik>
            </View>
            <ItemsCard todoItems={todoItems} setTodoItems={handleDeleteItem}/>
        
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"sand",
        justifyContent:"center"
    },
    textInputContainer:{
        marginTop:80,
        marginBottom:10,
        marginLeft:10,
        marginRight:10
    },
    error:{
        color:"red",
        fontSize:13,
        marginLeft:10
    }
})
 
export default TasksScreen;