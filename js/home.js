async function loadGroupProfile(){

    const { data, error } = await supabaseClient
        .from("group_profile")
        .select("*")
        .limit(1)
        .single();


    if(error){
        console.log(error);
        return;
    }


    document.getElementById("group-photo").src =
        data.profile_photo_url;

}


loadGroupProfile();
