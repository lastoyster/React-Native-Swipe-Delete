import React,{useCallback,useRef,useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import { ScrollView, GestureHandlerRootView,} from 'react-native-gesture-handler';
import ListItem from './components/ListItem';

const TITLES= [
  'Record the daily coding',
  'Create UI in figma',
  'Review Code',
  'Push to Git',
];

interface TaskInterface{
  title:string;
  index:number;
}

const TASKS: TaskInterface[]= TITLES.map((title,index)=> ({title,index}));
//const tasks =[
  //{
   // index:0,
    //title:'Record the video',
  //},
  //{..}{...}.{..
//];

const backgroundColor ='#FABFF';

function App() {
  const [tasks,setTasks]= useState(TASKS);
  const onDismiss = useCallback((task:TaskInterface)=>{
    setTasks((tasks)=>tasks.filter((item)=> item.index !==task.index));
  },[]);
  
  const scrollRef= useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <Text style={styles.titile}>Tasks</Text>
      <ScrollView ref={scrollRef} style={{flex:1}}>
        {tasks.map((task)=> (
      <ListItem 
      simultaneousHandlers={scrollRef}
      key={task.index}
      task={task}
      onDismiss={onDismiss}
      />
      ))}
      </ScrollView>
      </SafeAreaView>
  );
}

export default()=>{
  return(
    <GestureHandlerRootView style={{flex:1}}>
      <App/>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
    title:{
      fontSize:60,
      marginVertical:20,
      paddingLeft:'5%',
    },
});

export {TaskInterface};
