import React, { useState } from "react";
import { View, FlatList, Alert } from "react-native";
import ListItem from "../components/ListItem";
import { getProfileData } from "../services/fackservices";
import AppSeparator from "../components/AppSeparator";
import DeleteAction from "../components/DeleteAction";

function MessageScreen(props) {
  const profileData = getProfileData();
  const [profiles, setprofiles] = useState(profileData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDeletePress = (id) => {
    let filteredProfile = profiles.filter((profile) => profile.id !== id);
    setprofiles(filteredProfile);
  };

  const renderFlatList = (item) => {
    return (
      <ListItem
        onPress={() => alert(JSON.stringify(item))}
        image={item.image}
        title={item.title}
        subTitle={item.subTitle}
        renderRightActions={() => (
          <DeleteAction onPress={() => handleDeletePress(item.id)} />
        )}
      />
    );
  };

  return (
    // <View>
    //   {profiles.map((profile) => (
    //     <Swipeable
    //       key={profile.id}
    //       renderRightActions={() => (
    //         <DeleteAction onPress={() => alert(JSON.stringify(profile))} />
    //       )}
    //     >
    //       <ListItem
    //         onPress={() => console.log("message is running...")}
    //         title={profile.title}
    //         subTitle={profile.subTitle}
    //         image={profile.image}
    //       />
    //     </Swipeable>
    //   ))}
    // </View>

    <FlatList
      data={profiles}
      keyExtractor={(profile) => profile.id.toString()}
      renderItem={({ item }) => renderFlatList(item)}
      ItemSeparatorComponent={() => <AppSeparator color="gray" />}
      refreshing={refreshing}
      onRefresh={()=>setprofiles(profileData)}
    />
  );
}



export default MessageScreen;
