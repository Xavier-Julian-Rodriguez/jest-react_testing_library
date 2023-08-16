import { render, screen } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills', () => {
    const skills = ["HTML", "CSS", "JavaScript"]

    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length)

        });

    test('Login button is rendered', () => {
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole("button", {
            name: "Login"
        });
        expect(loginButton).toBeInTheDocument();
    })

    test('Start learning button is not rendered', () => {
        render(<Skills skills={skills} />);
        const startLearningButton = screen.queryByRole("button", {
            name: "Start learning"
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });

    // for the findBy class, do not forget to add async and await since findBy returns a promise.
    // the default timeout value for findBy is 1000ms, so if you need more time, pass in a third argument object to findBy, specify timeout and set it with any value.
    // to debug tests, you may use screen.debug(); before and after the test you would like to debug. Uncomment lines 39 and 49 to try it.
    // screen.debug();
    test('Start learning button is eventually rendered', async () => {
        render(<Skills skills={skills} />);
        const startLearningButton = await screen.findByRole("button", {
            name: "Start learning"
        }, {
            timeout: 2000
        });
        expect(startLearningButton).toBeInTheDocument();
    });
    // screen.debug();
});