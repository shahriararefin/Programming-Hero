#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_ITEMS 100
#define MAX_ORDERS 50

typedef struct {
    int id;
    char name[50];
    char description[100];
    float price;
} MenuItem;

typedef struct {
    int id;
    MenuItem items[MAX_ITEMS];
    int itemCount;
    float totalPrice;
} Order;

MenuItem menu[MAX_ITEMS];
int menuCount = 0;

Order orders[MAX_ORDERS];
int orderCount = 0;

void addMenuItem(int id, const char* name, const char* description, float price) {
    if (menuCount < MAX_ITEMS) {
        menu[menuCount].id = id;
        strcpy(menu[menuCount].name, name);
        strcpy(menu[menuCount].description, description);
        menu[menuCount].price = price;
        menuCount++;
    } else {
        printf("Menu is full, cannot add more items.\n");
    }
}

void displayMenu() {
    printf("Menu:\n");
    for (int i = 0; i < menuCount; i++) {
        printf("%d: %s - %s ($%.2f)\n", menu[i].id, menu[i].name, menu[i].description, menu[i].price);
    }
}

void createOrder(int orderId) {
    if (orderCount < MAX_ORDERS) {
        orders[orderCount].id = orderId;
        orders[orderCount].itemCount = 0;
        orders[orderCount].totalPrice = 0;
        orderCount++;
    } else {
        printf("Cannot create more orders.\n");
    }
}

void addItemToOrder(int orderId, int menuItemId) {
    for (int i = 0; i < orderCount; i++) {
        if (orders[i].id == orderId) {
            for (int j = 0; j < menuCount; j++) {
                if (menu[j].id == menuItemId) {
                    orders[i].items[orders[i].itemCount] = menu[j];
                    orders[i].itemCount++;
                    orders[i].totalPrice += menu[j].price;
                    break;
                }
            }
            break;
        }
    }
}

void displayOrder(int orderId) {
    for (int i = 0; i < orderCount; i++) {
        if (orders[i].id == orderId) {
            printf("Order %d:\n", orderId);
            for (int j = 0; j < orders[i].itemCount; j++) {
                printf("%s - $%.2f\n", orders[i].items[j].name, orders[i].items[j].price);
            }
            printf("Total Price: $%.2f\n", orders[i].totalPrice);
            break;
        }
    }
}

void takeOrder() {
    int orderId;
    printf("Enter Order ID: ");
    scanf("%d", &orderId);
    createOrder(orderId);

    int menuItemId;
    char moreItems;
    do {
        displayMenu();
        printf("Enter Menu Item ID to add to order: ");
        scanf("%d", &menuItemId);
        addItemToOrder(orderId, menuItemId);
        printf("Add more items? (y/n): ");
        scanf(" %c", &moreItems);
    } while (moreItems == 'y' || moreItems == 'Y');

    displayOrder(orderId);
}

void printReceipt(int orderId) {
    displayOrder(orderId);
    // Additional receipt formatting can be done here
}

void saveMenuToFile(const char* filename) {
    FILE* file = fopen(filename, "w");
    if (file != NULL) {
        fprintf(file, "%d\n", menuCount);
        for (int i = 0; i < menuCount; i++) {
            fprintf(file, "%d %s %s %.2f\n", menu[i].id, menu[i].name, menu[i].description, menu[i].price);
        }
        fclose(file);
    } else {
        printf("Failed to save menu to file.\n");
    }
}

void loadMenuFromFile(const char* filename) {
    FILE* file = fopen(filename, "r");
    if (file != NULL) {
        fscanf(file, "%d", &menuCount);
        for (int i = 0; i < menuCount; i++) {
            fscanf(file, "%d %s %s %f", &menu[i].id, menu[i].name, menu[i].description, &menu[i].price);
        }
        fclose(file);
    } else {
        printf("Failed to load menu from file.\n");
    }
}

int main() {
    int choice;
    do {
        printf("1. Add Menu Item\n");
        printf("2. Display Menu\n");
        printf("3. Take Order\n");
        printf("4. Print Receipt\n");
        printf("5. Save Menu to File\n");
        printf("6. Load Menu from File\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        int id;
        char name[50], description[100];
        float price;

        switch (choice) {
            case 1:
                printf("Enter Menu Item ID: ");
                scanf("%d", &id);
                printf("Enter Menu Item Name: ");
                scanf("%s", name);
                printf("Enter Menu Item Description: ");
                scanf("%s", description);
                printf("Enter Menu Item Price: ");
                scanf("%f", &price);
                addMenuItem(id, name, description, price);
                break;
            case 2:
                displayMenu();
                break;
            case 3:
                takeOrder();
                break;
            case 4:
                printf("Enter Order ID: ");
                scanf("%d", &id);
                printReceipt(id);
                break;
            case 5:
                saveMenuToFile("menu.txt");
                break;
            case 6:
                loadMenuFromFile("menu.txt");
                break;
            case 0:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 0);

    return 0;
}
