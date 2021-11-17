import './portfolio-list.scss';

export default function PortfolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "work-type active" : "work-type"}
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}