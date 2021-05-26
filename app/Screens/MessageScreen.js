import React, { useState } from "react";
import { View, FlatList } from "react-native";
import ShortProfile from "../components/ShortProfile";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { getItem } from "../services/fackservices";
import DeleteAction from "../components/DeleteAction";
import { getProfileData } from "../services/fackservices";

function MessageScreen(props) {
  const profileData = getProfileData();
  const [profiles, setprofiles] = useState(profileData);
  const [refreshing, setRefreshing] = useState(true);
  return (
    // <View>
    //   {profiles.map((profile) => (
    //     <Swipeable
    //       key={profile.id}
    //       renderRightActions={() => (
    //         <DeleteAction onPress={() => alert(JSON.stringify(profile))} />
    //       )}
    //     >
    //       <ShortProfile
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
    renderItem={(profile)=>(<Swipeable
              
              renderRightActions={() => (
                <DeleteAction onPress={() => alert(JSON.stringify(profile))} />
              )}
            >
              <ShortProfile
                onPress={() => console.log("message is running...")}
                title={profile.title}
                subTitle={profile.subTitle}
                image={profile.image}
              />
            </Swipeable>)}
            refreshing={refreshing}
           
    >

    </FlatList>
  );
}

export default MessageScreen;
