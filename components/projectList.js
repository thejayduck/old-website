import { Header } from "./header";

export default function ProjectList({ renderItem, data, header, icon }) {
    return (
        <div>
            <Header title={header} icon={icon} />
            <ul
                style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    alignContent: "space-between",
                    listStyle: "none",
                    justifyContent: "center",
                    padding: "0",
                    margin: "0 0 25px 0"
                }}
            >
                {
                    data.map((q, idx) =>
                        q ? (
                            renderItem(q, idx)
                        ) : <li> Nothing to See Here </li>
                    )
                }
            </ul>
        </div>
    );
}