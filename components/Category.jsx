import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  
  import task1 from "../assets/task1.png";
  import task2 from "../assets/task2.png";
  import task3 from "../assets/task3.png";
  import task4 from "../assets/task4.png";
  import task5 from "../assets/task5.png";
  import task6 from "../assets/task6.png";
  import task7 from "../assets/task7.png";
  import task8 from "../assets/task8.png";
  import task9 from "../assets/task9.png";
  import task10 from "../assets/task10.png";
  const data = [
    {
      id: "1",
      number: 1,
      title: "Morning Run",
      imageUrl: task1,
    }, 
    {
      id: "2",
      number: 2,
      title: "Math Homework",
      imageUrl: task2,
    },
    {
      id: "3",
      number: 3,
      title: "Build React App",
      imageUrl: task3,
    },
    {
      id: "4",
      number: 4,
      title: "Dinner Preparation",
      imageUrl: task4,
    },
    {
      id: "5",
      number: 5,
      title: "Read Novel",
      imageUrl: task5,
    },
    {
      id: "6",
      number: 6,
      title: "Grocery Shopping",
      imageUrl: task6,
    },
    {
      id: "7",
      number: 7,
      title: "Clean Kitchen",
      imageUrl: task7,
    },
    {
      id: "8",
      number: 8,
      title: "Meditation",
      imageUrl: task8,
    },
    {
      id: "9",
      number: 9,
      title: "Yoga Session",
      imageUrl: task9,
    },
    {
      id: "10",
      number: 10,
      title: "Physics Assignment",
      imageUrl: task10,
    },
  ];
  
  const Category = () => {
    return (
      <>
        <Text style={styles.catText}>Categories</Text>
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.category}
              onPress={() => alert("Hello")}
            >
              <View>
                <Text>{item.title}</Text>
                <Text>{item.number}</Text>
                <Image
                  style={styles.catImg}
                  source={
                   item.imageUrl
                  }
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </>
    );
  };
  
  export default Category;
  
  const styles = StyleSheet.create({
    catText: {
      paddingVertical: 5,
      paddingLeft: 2,
      //fontWeight: "bold",
      fontSize: 24,
    },
    category: {
      padding: 20,
      margin: 4,
      backgroundColor: "white",
      borderRadius: 10,
    },
  
    catImg: {
      width: 120,
      height: 120,
      resizeMode: "contain",
    },
  });