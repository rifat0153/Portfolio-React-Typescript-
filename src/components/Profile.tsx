const Profile = () => {
  const profileImg =
    'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/profile.jpg?alt=media&token=651868e1-ec74-4fb0-bccf-72c32b01e385';

  return (
    <>
      <img
        className="w-44 h-44 mt-8 shadow-lg mx-auto rounded-full object-cover object-top"
        src={profileImg}
        alt="a"
      />

      <p className="mt-8 text-center font-medium text-2xl md:text-5xl">
        Mahbubur Rahman
      </p>

      <p className="pt-2 md:pt-8 text-center text-xl  md:text-3xl">
        Product Builder
      </p>
      <p className="py-1 md:py-2 text-center text-md md:text-xl">
        Typescript and Dart Developer
      </p>
    </>
  );
};

export default Profile;
