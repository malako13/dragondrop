import { memo } from 'react';
import styles from './layout.module.css';

const Layout = () => {

    return (
        <body className={styles.body}>
            <header>

            </header>

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <main>
                <section>
                    <h2>About Us</h2>
                    <p>We are a company that...</p>
                </section>

                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>&copy; 2023 My Web Page. All rights reserved.</p>
            </footer>
        </body>
    );
}

export default memo(Layout);