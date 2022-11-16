import React from "react";
import styles from '../styles/Home.module.css'

// import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Navbar, Button, Link, Text, Dropdown } from "@nextui-org/react";

export default function Header() {
    const [activeColor, setActiveColor] = React.useState("primary");

    const collapseItems = [
      "Get Started",
      "Connect Wallet"
    ];

  return (
    <div>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <div className={styles.section}>
            <Text css={{textGradient: "45deg, $blue600 -20%, $purple500 50%"}}>
              <Link className={styles.title} href="/">Diffuse.</Link>
            </Text>
          </div>

        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link isActive href="/diffuse">Get Started</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          hideIn="xs"
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
        <Navbar.Item>
          <Button disabled auto flat as={Link} href="#">
            Connect Wallet
          </Button>
        </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content
          showIn="xs"
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
