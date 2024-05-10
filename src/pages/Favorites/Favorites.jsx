// import { useDispatch, useSelector } from "react-redux";
// import { removeFavorite } from "../../redux/Favorites/favoritesSlice";
// import TeacherItem from "components/TeacherItem/TeacherItem";
// import {
//   CenteredMessage,
//   StyledFavorite,
//   TeacherWrapper,
//   Title,
// } from "./Favorites.styled";

// const Favorites = () => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.favorites.favorites);

//   const handleFavoriteToggle = (teacherId) => {
//     dispatch(removeFavorite(teacherId));
//   };

//   return (
//     <StyledFavorite>
//       <TeacherWrapper>
//         {favorites.length > 0 ? (
//           favorites.map((teacher) => (
//             <TeacherItem
//               key={teacher.id}
//               teacher={teacher}
//               onRemoveFavorite={() => handleFavoriteToggle(teacher.id)}
//             />
//           ))
//         ) : (
//           <CenteredMessage>
//             <Title>You don't have any teacher.</Title>
//           </CenteredMessage>
//         )}
//       </TeacherWrapper>
//     </StyledFavorite>
//   );
// };

// export default Favorites;
