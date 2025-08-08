#include <bits/stdc++.h>

using namespace std;

int main()
{
    int *arr;
    int n;

    cout << "Enter the array length:" << endl;
    cin >> n;
    arr = (int *)malloc(n * sizeof(int));

    cout << "Enter array elements:" << endl;

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }

    cout << endl;
}