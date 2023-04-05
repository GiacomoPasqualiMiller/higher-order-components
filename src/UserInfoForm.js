import { withEditableResource } from "./withEditableResource";
import { withEditableUser } from "./withEditableUser";

export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser, onDeleteUser }) => {
    const { name, age, hairColor } = user || {}; //è una condizione per cui -> se vuoto restituirà un oggetto vuoto

    return user ? (
      <div className="flex flex-wrap space-y-4">
        <h3 className="text-3xl font-semibold text-center w-full">
          Higher Order Components
        </h3>
        <div className="w-full">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
          <label>Age: </label>
          <input
            type="number"
            value={age}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
          <label>Hair Color: </label>
          <input
            type="text"
            value={hairColor}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={onDeleteUser}
            className="w-1/4 px-4 py-2 text-xl font-bold bg-red-500 text-white  rounded-full shadow-sm"
          >
            Delete
          </button>
          <button
            onClick={onResetUser}
            className="w-1/4 px-4 py-2 text-xl font-bold bg-cyan-500 text-white  rounded-full shadow-sm"
          >
            Reset
          </button>
          <button
            onClick={onSaveUser}
            className="w-1/4 px-4 py-2 text-xl font-bold bg-cyan-500 text-white  rounded-full shadow-sm"
          >
            Save
          </button>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  },
  "/users/123",
  "user"
);
/* export const UserInfoForm = withEditableUser(
  ({ user, onChangeUser, onSaveUser, onResetUser, onDeleteUser }) => {
    const { name, age, hairColor } = user || {}; //è una condizione per cui -> se vuoto restituirà un oggetto vuoto

    return user ? (
      <>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
        <label>Hair Color: </label>
        <input
          type="text"
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
        <button onClick={onDeleteUser}>Delete</button>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "123"
); */
